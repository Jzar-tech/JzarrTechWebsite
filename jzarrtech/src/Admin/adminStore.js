import defaultTeamMembers from "./data/team";
import defaultLeads from "./data/leads";

const defaultLeadHistory = {
  4: [
    {
      id: "history-seed-4-1",
      timestamp: "2026-07-02T14:29:26.000Z",
      author: "Umer Ali",
      role: "Manager",
      type: "status",
      from: "Pending",
      to: "Converted",
      message: "Status changed from Pending to Converted.",
    },
    {
      id: "history-seed-4-2",
      timestamp: "2026-07-02T14:08:35.000Z",
      author: "Ali Raza",
      role: "Agent",
      type: "note",
      message: "Initial follow-up note added.",
    },
  ],
};

const STORAGE_KEYS = {
  users: "jzarr_admin_users",
  session: "jzarr_admin_session",
  rememberedAuth: "jzarr_admin_remembered_auth",
  teamMembers: "jzarr_admin_team_members",
  leads: "jzarr_admin_leads",
  leadHistory: "jzarr_admin_lead_history",
};

const safeParse = (value, fallback) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) || typeof parsed === "object" ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const monthMap = {
  jan: "01",
  feb: "02",
  mar: "03",
  apr: "04",
  may: "05",
  jun: "06",
  jul: "07",
  aug: "08",
  sep: "09",
  oct: "10",
  nov: "11",
  dec: "12",
};

const toLeadDateKey = (value = "") => {
  const text = String(value ?? "").trim();

  if (!text) {
    return "";
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return text;
  }

  let match = text.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (match) {
    const [, first, second, year] = match;
    const dayFirst = Number(first) > 12;
    const day = dayFirst ? first : second;
    const month = dayFirst ? second : first;
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  match = text.match(/^(\d{1,2})\s+([A-Za-z]{3,9})\.?\s+(\d{4})$/);
  if (match) {
    const [, day, monthName, year] = match;
    const month = monthMap[monthName.toLowerCase().slice(0, 3)];
    if (month) {
      return `${year}-${month}-${String(day).padStart(2, "0")}`;
    }
  }

  const parsedDate = new Date(text);

  return Number.isNaN(parsedDate.getTime())
    ? ""
    : parsedDate.toISOString().slice(0, 10);
};

const loadUsers = () => {
  const rawValue = localStorage.getItem(STORAGE_KEYS.users);
  return rawValue ? safeParse(rawValue, []) : [];
};

const loadTeamMembers = () => {
  const rawValue = localStorage.getItem(STORAGE_KEYS.teamMembers);

  if (!rawValue) {
    localStorage.setItem(
      STORAGE_KEYS.teamMembers,
      JSON.stringify(defaultTeamMembers),
    );
    return defaultTeamMembers;
  }

  const parsed = safeParse(rawValue, defaultTeamMembers);

  return Array.isArray(parsed) ? parsed : defaultTeamMembers;
};

const loadLeads = () => {
  const rawValue = localStorage.getItem(STORAGE_KEYS.leads);
  const removedSeedNote = "Awaiting client confirmation after proposal shared.";

  if (!rawValue) {
    const seededLeads = defaultLeads.map((lead) => ({
      ...lead,
      dateKey: toLeadDateKey(lead.date),
    }));

    localStorage.setItem(STORAGE_KEYS.leads, JSON.stringify(seededLeads));
    return seededLeads;
  }

  const parsed = safeParse(rawValue, defaultLeads);

  if (!Array.isArray(parsed)) {
    return defaultLeads;
  }

  const defaultLeadMap = new Map(defaultLeads.map((lead) => [lead.id, lead]));
  const allowedLeadIds = new Set(defaultLeadMap.keys());
  const filteredLeads = parsed
    .filter((lead) => allowedLeadIds.has(lead.id))
    .map((lead) => ({
      ...defaultLeadMap.get(lead.id),
      ...lead,
      dateKey: toLeadDateKey(lead.date || defaultLeadMap.get(lead.id)?.date),
    }));
  const missingDefaults = defaultLeads.filter(
    (lead) => !filteredLeads.some((item) => item.id === lead.id),
  ).map((lead) => ({
    ...lead,
    dateKey: toLeadDateKey(lead.date),
  }));
  const normalizedLeads = filteredLeads.map((lead) => {
    if (lead.followUpNote !== removedSeedNote) {
      return lead;
    }

    const nextLead = { ...lead };
    delete nextLead.followUpNote;
    return nextLead;
  });

  const shouldPersistMigration =
    normalizedLeads.some((lead, index) => lead !== filteredLeads[index]) ||
    filteredLeads.length !== normalizedLeads.length;

  if (shouldPersistMigration) {
    localStorage.setItem(
      STORAGE_KEYS.leads,
      JSON.stringify([...normalizedLeads, ...missingDefaults]),
    );
  }

  return [...normalizedLeads, ...missingDefaults].sort((a, b) => a.id - b.id);
};

const loadLeadHistory = () => {
  const rawValue = localStorage.getItem(STORAGE_KEYS.leadHistory);

  if (!rawValue) {
    localStorage.setItem(
      STORAGE_KEYS.leadHistory,
      JSON.stringify(defaultLeadHistory),
    );
    return defaultLeadHistory;
  }

  const parsed = safeParse(rawValue, defaultLeadHistory);

  if (typeof parsed !== "object" || Array.isArray(parsed)) {
    return defaultLeadHistory;
  }

  return {
    ...defaultLeadHistory,
    ...parsed,
  };
};

const saveUsers = (users) => {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
};

const emitLeadsUpdated = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("jzarrtech:leads-updated"));
  }
};

export const getUsers = () => loadUsers();

export const getSession = () => {
  const rawValue = localStorage.getItem(STORAGE_KEYS.session);
  return rawValue ? safeParse(rawValue, null) : null;
};

export const saveSession = (session) => {
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
};

export const clearSession = () => {
  localStorage.removeItem(STORAGE_KEYS.session);
};

export const getRememberedAuth = () => {
  const rawValue = localStorage.getItem(STORAGE_KEYS.rememberedAuth);
  return rawValue ? safeParse(rawValue, null) : null;
};

export const saveRememberedAuth = (auth) => {
  localStorage.setItem(STORAGE_KEYS.rememberedAuth, JSON.stringify(auth));
};

export const clearRememberedAuth = () => {
  localStorage.removeItem(STORAGE_KEYS.rememberedAuth);
};

export const getTeamMembers = () => loadTeamMembers();

export const getLeads = () => loadLeads();

export const saveLeads = (leads) => {
  localStorage.setItem(STORAGE_KEYS.leads, JSON.stringify(leads));
  emitLeadsUpdated();
};

export const updateLeadRecord = (updatedLead) => {
  const leads = loadLeads();
  const nextLead = {
    ...updatedLead,
    dateKey: toLeadDateKey(updatedLead.date),
  };
  const nextLeads = leads.map((lead) =>
    lead.id === nextLead.id ? nextLead : lead,
  );

  saveLeads(nextLeads);
  return nextLead;
};

export const getLeadById = (leadId) =>
  loadLeads().find((lead) => String(lead.id) === String(leadId)) || null;

export const getLeadHistory = (leadId) => {
  const history = loadLeadHistory();
  return history[String(leadId)] || [];
};

export const appendLeadHistory = (leadId, entry) => {
  const history = loadLeadHistory();
  const key = String(leadId);
  const nextEntry = {
    id: `history-${Date.now()}`,
    timestamp: new Date().toISOString(),
    ...entry,
  };

  history[key] = [...(history[key] || []), nextEntry];
  localStorage.setItem(STORAGE_KEYS.leadHistory, JSON.stringify(history));
  return nextEntry;
};

export const saveTeamMembers = (members) => {
  localStorage.setItem(
    STORAGE_KEYS.teamMembers,
    JSON.stringify(members),
  );
};

export const addTeamMember = (member) => {
  const members = loadTeamMembers();
  const nextMember = {
    id: member.id ?? `member-${Date.now()}`,
    name: member.name.trim(),
    email: member.email.trim().toLowerCase(),
    password: member.password,
    role: member.role,
    status: member.status ?? "Active",
    createdAt: member.createdAt ?? new Date().toISOString(),
  };

  const nextMembers = [...members, nextMember];
  saveTeamMembers(nextMembers);
  return nextMember;
};

export const updateTeamMember = (updatedMember) => {
  const members = loadTeamMembers();
  const nextMembers = members.map((member) =>
    member.id === updatedMember.id ? updatedMember : member,
  );

  saveTeamMembers(nextMembers);
  return updatedMember;
};

export const deleteTeamMember = (memberId) => {
  const members = loadTeamMembers();
  const nextMembers = members.filter((member) => member.id !== memberId);

  saveTeamMembers(nextMembers);
  return nextMembers;
};

export const getAssignableTeamMembers = (role = "Admin") => {
  const members = loadTeamMembers().filter(
    (member) => member.status === "Active",
  );

  if (role === "Manager") {
    return members.filter((member) => member.role === "Agent");
  }

  return members;
};

export const bootstrapAdminAccount = ({ name, email, password }) => {
  const users = loadUsers();

  if (users.length > 0) {
    throw new Error("Initial setup is only available when no accounts exist.");
  }

  const adminUser = {
    id: `user-${Date.now()}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password,
    role: "Admin",
    status: "Active",
    createdAt: new Date().toISOString(),
  };

  saveUsers([adminUser]);
  return adminUser;
};

export const loginWithCredentials = ({ email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();

  const user = loadUsers().find(
    (item) =>
      item.email.toLowerCase() === normalizedEmail &&
      item.password === password &&
      item.status === "Active",
  );

  if (user) {
    return user;
  }

  const teamMember = loadTeamMembers().find(
    (item) =>
      item.email.toLowerCase() === normalizedEmail &&
      item.password === password &&
      item.status === "Active",
  );

  if (!teamMember) {
    throw new Error("Invalid email or password.");
  }

  return {
    id: teamMember.id,
    name: teamMember.name,
    email: teamMember.email,
    password: teamMember.password,
    role: teamMember.role,
    status: teamMember.status,
    createdAt: teamMember.createdAt,
  };
};
