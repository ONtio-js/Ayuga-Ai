import { createContext, useState, useEffect } from "react";
import Onboarding from "../onboarding/Onboarding";

const OnboardingContext = createContext({});

export const OnboardingProvider = ({children}) => {
    const [ page, setPage ] = useState(0);
	let title = "";
	page > 0 ? title = "welcome":"";
    return (
		<OnboardingContext.Provider value={{ page, setPage,title }}>
			{children}
		</OnboardingContext.Provider>
	); 
}

export default OnboardingContext;