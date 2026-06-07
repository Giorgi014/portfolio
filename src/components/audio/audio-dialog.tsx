"use client";

import { useAudioModal } from "@/app/hooks/use-audio-modal";
import { CloseIcon } from "@/assets/img/icons/close";
import { AudioRange, Card } from "@/components";
import { useTranslations } from "next-intl";

export const AudioSettingsModal = () => {
  const { isOpen, close } = useAudioModal();
  const t = useTranslations();

  if (!isOpen) return null;

  return (
    <Card className="audio_modal_overlay" variant="audio">
      <section className="audio_header">
        <h2 className="audio_title">{t("settings")}</h2>
        <CloseIcon onClick={close} className="close" />
      </section>
      <AudioRange />
    </Card>
  );
};
