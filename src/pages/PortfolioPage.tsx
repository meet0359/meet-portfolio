import { useSearchParams, useParams } from "react-router-dom";
import { ProfileProvider } from "@/context/ProfileContext";
import Index from "./Index";

/**
 * Active developer: query string ?developer=profileId takes precedence,
 * then /developer/:profileId, else default profile.
 * e.g. ?developer=roushan-singh or /developer/roushan-singh
 */
const PortfolioPage = () => {
  const [searchParams] = useSearchParams();
  const { profileId: routeProfileId } = useParams<{ profileId?: string }>();
  const profileId = searchParams.get("developer") ?? routeProfileId ?? undefined;
  return (
    <ProfileProvider profileId={profileId}>
      <Index />
    </ProfileProvider>
  );
};

export default PortfolioPage;
