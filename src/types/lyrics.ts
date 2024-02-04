export interface LyricsItem {
  artist: [
    {
      _type: string;
      api_path: string;
      header_image_url: string;
      id: number;
      image_url: string;
      index_character: string;
      is_meme_verified: boolean;
      is_verified: boolean;
      name: string;
      slug: string;
      url: string;
      iq?: number;
    }
  ]
  stats: [
    {
      unreviewed_annotations: number;
      hot: boolean;
      pageviews: number;
       
    }
  ]
  result: [
    {
      _type: string;
      annotation_count: number;
      api_path: string;
      artist_names: string;
      full_title: string;
      header_image_thumbnail_url: string;
      header_image_url: string;
      id: number;
      instrumental: boolean;
      lyrics_owner_id: number;
      lyrics_state: string;
      lyrics_updated_at: number;
      path: string;
      pyongs_count: number;
      song_art_image_thumbnail_url: string;
      song_art_image_url: string;
      title: string;
      title_with_featured: string;
      updated_by_human_at: number;
      url: string;
    }
  ]
  hit: [
    {
      highlights: string[];
      index: string;
      type: string;
    }
  ]
}






