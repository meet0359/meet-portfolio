import { createContext, useContext, ReactNode } from "react";
import type { Profile } from "@/data/portfolio";
import { getCurrentProfile, getProfileById } from "@/data/portfolio";

const ProfileContext = createContext<Profile | null>(null);

export function ProfileProvider({
  profileId,
  children,
}: {
  profileId?: string | null;
  children: ReactNode;
}) {
  const profile =
    profileId != null ? getProfileById(profileId) ?? getCurrentProfile() : getCurrentProfile();
  return (
    <ProfileContext.Provider value={profile}>{children}</ProfileContext.Provider>
  );
}

export function useProfile(): Profile {
  const profile = useContext(ProfileContext);
  if (!profile) return getCurrentProfile();
  return profile;
}
