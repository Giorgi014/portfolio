"use client";

import {
  UseToggleAnimationProps,
  UseToggleAnimationReturn,
} from "@/components/type";
import { useState } from "react";

export const useToggleAnimation = (
  props?: UseToggleAnimationProps
): UseToggleAnimationReturn => {
  const [internalIsOpen, setInternalIsOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const isOpen = props?.isOpen ?? internalIsOpen;
  const onToggle =
    props?.onToggle ?? (() => setInternalIsOpen(!internalIsOpen));

  const openModal = () => {
    if (!isOpen && !isClosing) {
      if (props?.onToggle) {
        props.onToggle();
      } else {
        setInternalIsOpen(true);
      }
    }
  };

  const closeModal = () => {
    setIsClosing(true);
  };

  const toggleModal = () => {
    if (isOpen) {
      setIsClosing(true);
    } else {
      openModal();
    }
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsClosing(false);
      onToggle();
    }
  };

  const open = isOpen || isClosing;

  return {
    isOpen,
    isClosing,
    open,
    openModal,
    closeModal,
    toggleModal,
    handleAnimationEnd,
  };
};
