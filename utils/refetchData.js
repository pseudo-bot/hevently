import { mutate } from 'swr';

export default function refetchData(uid) {
  // mutate host events
	mutate(`/api/host/${uid}`);
  // mutate user events
  mutate(`/api/user/${uid}/event`);
  // mutate user venues
  mutate(`/api/user/${uid}/uservenue`);
}
