"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";

export default function CV() {
  return (
    <ContainerWrapper sections={3}>
      {({ scrollDown }) => (
        <div>
          <p>Hello</p>
        </div>
      )}
    </ContainerWrapper>
  );
}
