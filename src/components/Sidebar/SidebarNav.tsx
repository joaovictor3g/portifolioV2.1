import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack>
    <NavSection title="GENERAL">
      <NavLink icon={RiDashboardLine} href="/dashboard">Dashbord</NavLink>
      <NavLink icon={RiContactsLine} href="/users">Users</NavLink>
    </NavSection>
    <NavSection title="AUTOMATION">
      <NavLink icon={RiInputMethodLine} href="/forms">Forms</NavLink>
      <NavLink icon={RiGitMergeLine} href="/automation">Automation</NavLink>
    </NavSection>
  </Stack>
  );
}