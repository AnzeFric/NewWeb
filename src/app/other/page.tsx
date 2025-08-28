"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";

export default function OtherPage() {
  return (
    <ContainerWrapper sections={1}>
      {({ scrollUp, scrollDown }) => <p>Other page</p>}
    </ContainerWrapper>
  );
}
