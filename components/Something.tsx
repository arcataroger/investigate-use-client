"use client";

import React from "react";
import useSomething from "../hooks/useSomething";

type Props = {};

export default function Something({}: Props) {
  const something = useSomething();

  return <div>{something}</div>;
}
