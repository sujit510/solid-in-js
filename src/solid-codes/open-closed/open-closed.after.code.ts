let restrictedAllowedRoles = ['ceo', 'admin', 'manager'];

function isAllowedRole(user: { role: string }): boolean {
  return restrictedAllowedRoles.includes(user.role);
}

// Need to add a new allowed role?
// - In order to honor the principle, lets add a method for same.

function addNewAllowedRole(newRole: string) {
  restrictedAllowedRoles.push(newRole);
}
