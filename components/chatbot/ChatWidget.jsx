"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ChatWidget.module.css";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Bonjour 👋 Je suis l’assistant SmartDex. Je peux vous aider à choisir une solution digitale, répondre à vos questions, ou vous guider vers un devis.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    let existingSessionId = localStorage.getItem("smartdex_chat_session_id");

    if (!existingSessionId) {
      existingSessionId = crypto.randomUUID();
      localStorage.setItem("smartdex_chat_session_id", existingSessionId);
    }

    setSessionId(existingSessionId);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`;
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    requestAnimationFrame(autoResizeTextarea);
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading || !sessionId) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/chatbot/chat/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
          message: trimmed,
          history: nextMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.detail ||
            data?.message ||
            "Une erreur est survenue lors de la réponse du chatbot."
        );
      }

      const assistantMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.answer || data.reply || "Aucune réponse reçue.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Je rencontre un problème technique pour le moment. Vous pouvez nous contacter directement via le formulaire ou demander un devis.",
        },
      ]);
      console.error("Chatbot error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage();
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await sendMessage();
    }
  };

  const resetConversation = () => {
    const newSessionId = crypto.randomUUID();
    localStorage.setItem("smartdex_chat_session_id", newSessionId);
    setSessionId(newSessionId);
    setMessages([
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Bonjour 👋 Je suis l’assistant SmartDex. Je peux vous aider à choisir une solution digitale, répondre à vos questions, ou vous guider vers un devis.",
      },
    ]);
    setInput("");
  };

  return (
    <>
      {!isOpen && (
        <button
          className={styles.floatingButton}
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir le chatbot SmartDex"
        >
          <span className={styles.floatingButtonIcon}>💬</span>
          <span className={styles.floatingButtonText}>SmartDex AI</span>
        </button>
      )}

      {isOpen && (
        <div className={styles.chatWidget}>
          <div className={styles.chatHeader}>
            <div>
              <h3 className={styles.chatTitle}>SmartDex Assistant</h3>
              <p className={styles.chatSubtitle}>
                Solutions web, SaaS, automation, IA
              </p>
            </div>

            <div className={styles.headerActions}>
              <button
                type="button"
                onClick={resetConversation}
                className={styles.headerButton}
                aria-label="Réinitialiser la conversation"
                title="Réinitialiser"
              >
                ↺
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={styles.headerButton}
                aria-label="Fermer le chatbot"
                title="Fermer"
              >
                ✕
              </button>
            </div>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.messageRow} ${
                  message.role === "user"
                    ? styles.userMessageRow
                    : styles.assistantMessageRow
                }`}
              >
                <div
                  className={`${styles.messageBubble} ${
                    message.role === "user"
                      ? styles.userBubble
                      : styles.assistantBubble
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div
                className={`${styles.messageRow} ${styles.assistantMessageRow}`}
              >
                <div
                  className={`${styles.messageBubble} ${styles.assistantBubble}`}
                >
                  <div className={styles.typingIndicator}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className={styles.inputArea}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Décrivez votre besoin..."
              className={styles.textarea}
              rows={1}
              maxLength={2000}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isLoading || !input.trim()}
            >
              Envoyer
            </button>
          </form>

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.quickAction}
              onClick={() => setInput("Je veux un site web pour mon activité")}
            >
              Site web
            </button>
            <button
              type="button"
              className={styles.quickAction}
              onClick={() => setInput("J’ai besoin d’une solution SaaS")}
            >
              SaaS
            </button>
            <button
              type="button"
              className={styles.quickAction}
              onClick={() => setInput("Je veux automatiser mon activité")}
            >
              Automation
            </button>
            <button
              type="button"
              className={styles.quickAction}
              // onclick redirect to /devis
              onClick={() => setInput("Je veux être guidé vers un devis")}
            >
              Demander un devis
            </button>
          </div>
        </div>
      )}
    </>
  );
}