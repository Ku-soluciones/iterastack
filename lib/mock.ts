import type { User, TeamDataWithMembers } from '@/lib/db/schema';

// This starter runs as a demo until real integrations are explicitly enabled.
export const isMockMode = process.env.MOCK_MODE !== 'false';

const createdAt = new Date('2026-01-01T00:00:00Z');
export const mockUser: User = {
  id: 1, name: 'Demo User', email: 'test@test.com', passwordHash: '',
  role: 'owner', createdAt, updatedAt: createdAt, deletedAt: null
};
export const mockTeam: TeamDataWithMembers = {
  id: 1, name: 'Demo Team', createdAt, updatedAt: createdAt,
  stripeCustomerId: null, stripeSubscriptionId: null, stripeProductId: null,
  planName: 'Base', subscriptionStatus: 'trialing',
  teamMembers: [{
    id: 1, userId: 1, teamId: 1, role: 'owner', joinedAt: createdAt,
    user: { id: 1, name: mockUser.name, email: mockUser.email }
  }]
};
