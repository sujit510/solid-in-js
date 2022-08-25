let allowedRoles = ['ceo', 'admin', 'manager'];

function isAllowed(user: { role: string }): boolean {
  return allowedRoles.includes(user.role);
}
// Need to add a new allowed role?
// - If you modify allowedRoles declaration, you are violating the open-closed proinciple
