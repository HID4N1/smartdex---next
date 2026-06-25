"use client";

import { useState } from "react";
import styles from "./DevisForm.module.css";
import DevisResult from "./DevisResult";
import { submitDevisRequest } from "../../services/devis";

const initialForm = {
  full_name: "",
  email: "",
  phone: "",
  company_name: "",
  business_sector: "",
  project_type: "website",
  project_goal: "",
  target_users: "",
  features: [],
  budget_range: "",
  deadline: "",
  // needs_admin_panel: false,
  // needs_authentication: false,
  // needs_payment: false,
  // needs_multilingual: false,
  notes: "",
};

const featureLabels = {
  contact_form: "contact form",
  admin_dashboard: "admin dashboard",
  authentication: "authentication",
  payment: "payment",
  booking: "booking",
  blog: "blog",
  chatbot: "chatbot",
  analytics: "analytics",
  notifications: "notifications",
  multilingual: "multilingual",
  api_integration: "API integration",
};

const projectTypeLabels = {
  website: "website",
  webapp: "webapp",
  saas: "saas",
  mobile_app: "mobile app",
  ecommerce: "ecommerce",
  automation: "automation",
  ai_system: "AI system",
  dashboard: "dashboard",
  api_integration: "API integration",
};

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
    const projectGoal = formData.project_goal?.trim();
    const projectType =
      projectTypeLabels[formData.project_type] || formData.project_type;
    const selectedFeatures = formData.features.map(
      (feature) => featureLabels[feature] || feature
    );
    const descriptionParts = [
      `Project type: ${projectType}.`,
      projectGoal,
      selectedFeatures.length
        ? `Requested features: ${selectedFeatures.join(", ")}.`
        : "",
      formData.budget_range ? `Budget range: ${formData.budget_range}.` : "",
      formData.deadline ? `Timeline: ${formData.deadline}.` : "",
      formData.business_sector?.trim()
        ? `Business sector: ${formData.business_sector.trim()}.`
        : "",
      formData.target_users?.trim()
        ? `Target users: ${formData.target_users.trim()}.`
        : "",
      formData.notes?.trim() ? `Additional notes: ${formData.notes.trim()}.` : "",
    ].filter(Boolean);

    const payload = {
      client_name: formData.full_name?.trim(),
      client_email: formData.email?.trim(),
      client_phone: formData.phone?.trim(),
      project_type: formData.project_type?.trim(),
      description: descriptionParts.join("\n"),
      budget_range: formData.budget_range?.trim(),
      timeline: formData.deadline?.trim(),
      preferred_language: "fr",
    };
  
    if (formData.features?.length) {
      payload.features = formData.features;
    }
  
    const extraHints = {};
  
    if (formData.company_name?.trim()) {
      extraHints.company_name = formData.company_name.trim();
    }
  
    if (formData.business_sector?.trim()) {
      extraHints.business_sector = formData.business_sector.trim();
    }
  
    if (formData.target_users?.trim()) {
      extraHints.target_users = formData.target_users.trim();
    }
  
    if (formData.notes?.trim()) {
      extraHints.notes = formData.notes.trim();
    }
  
    if (Object.keys(extraHints).length > 0) {
      payload.extra_hints = extraHints;
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
      const devisResult = await submitDevisRequest(payload);

      setResult(devisResult);
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

  const featureGroups = [
    {
      title: "Fonctionnalités principales",
      options: [
        { value: "contact_form", label: "Formulaire de contact" },
        { value: "booking", label: "Réservation" },
        { value: "blog", label: "Blog" },
        { value: "chatbot", label: "Chatbot IA" },
        { value: "analytics", label: "Analytics" },
        { value: "notifications", label: "Notifications" },
      ],
    },
    {
      title: "Options complémentaires",
      options: [
        { value: "admin_dashboard", label: "Espace d’administration" },
        { value: "authentication", label: "Connexion utilisateurs" },
        { value: "payment", label: "Paiement en ligne" },
        { value: "multilingual", label: "Version multilingue" },
        { value: "api_integration", label: "Intégration API" },
      ],
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Obtenir une estimation instantanée</h1>
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
                <label htmlFor="deadline">Délai souhaité</label>
                <select
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                >
                  <option value="">Sélectionner un délai</option>
                  <option value="1_week">1 semaine</option>
                  <option value="2_weeks">2 semaines</option>
                  <option value="3_weeks">3 semaines</option>
                  <option value="4_weeks">4 semaines</option>
                  <option value="6_weeks">6 semaines</option>
                  <option value="8_weeks">8 semaines</option>
                  <option value="10_weeks">10 semaines</option>
                  <option value="12_weeks">12 semaines</option>
                  <option value="16_weeks">16 semaines</option>
                  <option value="20_weeks">20 semaines</option>
                  <option value="24_weeks">24 semaines</option>
                  <option value="urgent">Urgent</option>
                  <option value="flexible">Flexible</option>
                </select>
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

            {/* <div className={styles.field}>
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
            </div> */}
            <div className={styles.optionSections}>
              {featureGroups.map((group) => (
                <div key={group.title} className={styles.optionBlock}>
                  <h3 className={styles.optionTitle}>{group.title}</h3>
                  <div className={styles.optionGrid}>
                    {group.options.map((option) => {
                      const isActive = formData.features.includes(option.value);

                      return (
                        <button
                          type="button"
                          key={option.value}
                          aria-pressed={isActive}
                          className={`${styles.optionCard} ${
                            isActive ? styles.optionCardActive : ""
                          }`}
                          onClick={() => handleFeatureToggle(option.value)}
                        >
                          <span className={styles.optionCardLabel}>{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
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
