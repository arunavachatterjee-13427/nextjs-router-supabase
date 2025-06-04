export type Role = 'admin' | 'editor' | 'viewer'

export function canEdit(role: Role) {
  return role === 'admin' || role === 'editor'
}

export function canDelete(role: Role) {
  return role === 'admin'
}
