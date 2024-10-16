import { useContext } from "react";

import OnboardingContext from "../Context/OnboardingContext";

import React from 'react'

const useOnboardingContex = () => {
  return useContext(OnboardingContext)
}

export default useOnboardingContex