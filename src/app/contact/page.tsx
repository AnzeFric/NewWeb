"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import styles from "@/constants/styles/components/contact/contact-styles.module.css";

export default function ContactPage() {
  return (
    <ContainerWrapper sections={1}>
      {({ scrollUp, scrollDown }) => (
        <div>
          <p>Contact page</p>
        </div>
      )}
    </ContainerWrapper>
  );
}
