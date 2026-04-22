"use client";

import { useState } from "react";
import styles from "./DevisForm.module.css";
import DevisResult from "./DevisResult";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

const initialForm = {
  full_name: "",
  email: "",
  phone: "",
  company_name: "",
  business_sector: "",
  project_type: "website",
  description: "",
  target_users: "",
  features: [],
  budget_range: "",
  deadline: "",
  needs_admin_panel: false,
  needs_authentication: false,
  needs_payment: false,
  needs_multilingual: false,
  notes: "",
};

const featureOptions = [
  "contact_form",
  "admin_dashboard",
  "authentication",
  "payment",
  "booking",
  "blog",
  "chatbot",
  "analytics",
  "crm",
  "notifications",
  "multilingual",
  "api_integration",
];

export default function DevisForm() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => {
      const exists = prev.features.includes(feature);

      return {
        ...prev,
        features: exists
          ? prev.features.filter((item) => item !== feature)
          : [...prev.features, feature],
      };
    });
  };

  const buildPayload = () => {
    const payload = {
      full_name: formData.full_name?.trim(),
      email: formData.email?.trim(),
      phone: formData.phone?.trim(),
      company_name: formData.company_name?.trim(),
      business_sector: formData.business_sector?.trim(),
      project_type: formData.project_type?.trim(),
      description: formData.project_goal?.trim(),
      target_users: formData.target_users?.trim(),
      budget_range: formData.budget_range?.trim(),
      deadline: formData.deadline?.trim(),
      notes: formData.notes?.trim(),
    };

    if (formData.features?.length) {
      payload.features = formData.features.join(", ");
    }

    if (formData.needs_admin_panel) {
      payload.needs_admin_panel = true;
    }

    if (formData.needs_authentication) {
      payload.needs_authentication = true;
    }

    if (formData.needs_payment) {
      payload.needs_payment = true;
    }

    if (formData.needs_multilingual) {
      payload.needs_multilingual = true;
    }

    return Object.fromEntries(
      Object.entries(payload).filter(
        ([, value]) => value !== "" && value !== null && value !== undefined
      )
    );
  };

  const submitDevis = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setResult(null);

    try {
      const payload = buildPayload();

      console.log("DEVIS PAYLOAD:", payload);

      const createResponse = await fetch(`${API_BASE_URL}/api/devis/requests/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const createContentType = createResponse.headers.get("content-type") || "";
      const createdData = createContentType.includes("application/json")
        ? await createResponse.json()
        : null;

      console.log("CREATE STATUS:", createResponse.status);
      console.log("CREATE RESPONSE:", createdData);

      if (!createResponse.ok) {
        throw new Error(JSON.stringify(createdData, null, 2));
      }

      const devisId = createdData?.id || createdData?.request_id;

      if (!devisId) {
        throw new Error("Identifiant de devis introuvable dans la réponse.");
      }

      const generateResponse = await fetch(
        `${API_BASE_URL}/api/devis/requests/${devisId}/generate/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const generateContentType =
        generateResponse.headers.get("content-type") || "";
      const generatedData = generateContentType.includes("application/json")
        ? await generateResponse.json()
        : null;

      console.log("GENERATE STATUS:", generateResponse.status);
      console.log("GENERATE RESPONSE:", generatedData);

      if (!generateResponse.ok) {
        throw new Error(JSON.stringify(generatedData, null, 2));
      }

      setResult({
        request: {
          ...payload,
          ...createdData,
        },
        quote: generatedData,
      });
      
    } catch (err) {
      console.error("Devis submission error:", err);
      setError(
        err.message ||
          "Une erreur est survenue lors de la génération du devis."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>SmartDex</span>
          <h1 className={styles.title}>Demander un devis</h1>
          <p className={styles.subtitle}>
            Décrivez votre besoin et obtenez une estimation structurée pour votre
            projet digital.
          </p>
        </div>

        {!result && (
          <form className={styles.form} onSubmit={submitDevis}>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label>Nom complet</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label>Téléphone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label>Entreprise</label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label>Secteur d’activité</label>
                <input
                  type="text"
                  name="business_sector"
                  value={formData.business_sector}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label>Type de projet</label>
                <select
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                >
                  <option value="website">Site web</option>
                  <option value="webapp">Web app</option>
                  <option value="saas">SaaS</option>
                  <option value="mobile_app">Application mobile</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="automation">Automation</option>
                  <option value="ai_system">Système IA</option>
                  <option value="dashboard">Dashboard</option>
                  <option value="api_integration">Intégration API</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>Budget estimé</label>
                <select
                  name="budget_range"
                  value={formData.budget_range}
                  onChange={handleChange}
                >
                  <option value="">Sélectionner</option>
                  <option value="<10000">Moins de 10 000 MAD</option>
                  <option value="10000-20000">10 000 - 20 000 MAD</option>
                  <option value="20000-50000">20 000 - 50 000 MAD</option>
                  <option value="50000-100000">50 000 - 100 000 MAD</option>
                  <option value=">100000">Plus de 100 000 MAD</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>Délai souhaité</label>
                <input
                  type="text"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  placeholder="Ex: 1 mois, urgent, 3 mois..."
                />
              </div>
            </div>

            <div className={styles.field}>
              <label>Objectif du projet</label>
              <textarea
                name="project_goal"
                value={formData.project_goal}
                onChange={handleChange}
                rows={4}
                placeholder="Expliquez ce que vous voulez construire..."
                required
              />
            </div>

            <div className={styles.field}>
              <label>Utilisateurs cibles</label>
              <textarea
                name="target_users"
                value={formData.target_users}
                onChange={handleChange}
                rows={3}
                placeholder="Qui utilisera cette solution ?"
              />
            </div>

            <div className={styles.field}>
              <label>Fonctionnalités souhaitées</label>
              <div className={styles.featureGrid}>
                {featureOptions.map((feature) => (
                  <button
                    type="button"
                    key={feature}
                    className={`${styles.featureTag} ${
                      formData.features.includes(feature)
                        ? styles.featureTagActive
                        : ""
                    }`}
                    onClick={() => handleFeatureToggle(feature)}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.checkboxGrid}>
              <label className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  name="needs_admin_panel"
                  checked={formData.needs_admin_panel}
                  onChange={handleChange}
                />
                <span>Admin panel</span>
              </label>

              <label className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  name="needs_authentication"
                  checked={formData.needs_authentication}
                  onChange={handleChange}
                />
                <span>Authentification</span>
              </label>

              <label className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  name="needs_payment"
                  checked={formData.needs_payment}
                  onChange={handleChange}
                />
                <span>Paiement en ligne</span>
              </label>

              <label className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  name="needs_multilingual"
                  checked={formData.needs_multilingual}
                  onChange={handleChange}
                />
                <span>Multilingue</span>
              </label>
            </div>

            <div className={styles.field}>
              <label>Notes complémentaires</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Toute information complémentaire..."
              />
            </div>

            {error && <pre className={styles.error}>{error}</pre>}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Génération en cours..." : "Générer le devis"}
            </button>
          </form>
        )}

        {result && (
          <DevisResult
            result={result}
            onReset={() => {
              setResult(null);
              setFormData(initialForm);
            }}
          />
        )}
      </div>
    </section>
  );
}