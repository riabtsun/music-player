export type TrackDetailsResource = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

type GetTrackDetailsOutput = { data: TrackDetailsResource };

export const getTrack = async (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: {
        "api-key": "b399d09d-3e66-4bad-8251-b13dce0fcfdf",
      },
    },
  ).then((res) => res.json());
  return await promise;
};

type TrackAttachment = {
  url: string;
};

type TrackDetailsAttributes = {
  title: string;
  attachments: Array<TrackAttachment>;
};

export type TrackListItemResource = {
  id: string;
  attributes: TrackDetailsAttributes;
};

type GetTrackListOutput = { data: Array<TrackListItemResource> };

export const getTracks = async () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: {
        "api-key": "b399d09d-3e66-4bad-8251-b13dce0fcfdf",
      },
    },
  ).then((res) => res.json());
  return promise;
};
