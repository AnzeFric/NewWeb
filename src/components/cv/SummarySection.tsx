import styles from "@/constants/styles/components/cv/summary-styles.module.css";
import { useState } from "react";

export default function SummarySection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    github: "",
    linkedin: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {};

  return (
    <div className={styles.cvSummaryContainer}>
      <div className={styles.cvSummaryContentContainer}>
        <div className={styles.inputGroup}>
          <label
            className={`${styles.cvSummaryLabel} primaryText`}
            htmlFor="firstName"
          >
            Name
          </label>
          <input
            className={styles.cvSummaryInput}
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label
            className={`${styles.cvSummaryLabel} primaryText`}
            htmlFor="lastName"
          >
            Surname
          </label>
          <input
            className={styles.cvSummaryInput}
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label
            className={`${styles.cvSummaryLabel} primaryText`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={styles.cvSummaryInput}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label
            className={`${styles.cvSummaryLabel} primaryText`}
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className={styles.cvSummaryInput}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label
            className={`${styles.cvSummaryLabel} primaryText`}
            htmlFor="address"
          >
            Address
          </label>
          <input
            className={styles.cvSummaryInput}
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label
            className={`${styles.cvSummaryLabel} primaryText`}
            htmlFor="country"
          >
            Country
          </label>
          <input
            className={styles.cvSummaryInput}
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label
            className={`${styles.cvSummaryLabel} primaryText`}
            htmlFor="github"
          >
            GitHub
          </label>
          <input
            className={styles.cvSummaryInput}
            type="url"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label
            className={`${styles.cvSummaryLabel} primaryText`}
            htmlFor="linkedin"
          >
            LinkedIn
          </label>
          <input
            className={styles.cvSummaryInput}
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button className={styles.cvSummaryButton} onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
