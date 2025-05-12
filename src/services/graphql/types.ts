export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  generalContentCollection?: Maybe<GeneralContentCollection>;
  musicCollection?: Maybe<MusicCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsGeneralContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsMusicCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Content der sich nicht wiederholt auf der gesamten Website. Es sollte immer nur einen Content published sein [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/generalContent) */
export type GeneralContent = Entry & _Node & {
  __typename?: 'GeneralContent';
  _id: Scalars['ID']['output'];
  aboutDescription?: Maybe<Scalars['String']['output']>;
  aboutImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  heroImage?: Maybe<Asset>;
  impressum?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<GeneralContentLinkingCollections>;
  privacyPolicy?: Maybe<Scalars['String']['output']>;
  supportLogosCollection?: Maybe<AssetCollection>;
  sys: Sys;
  version?: Maybe<Scalars['String']['output']>;
};


/** Content der sich nicht wiederholt auf der gesamten Website. Es sollte immer nur einen Content published sein [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/generalContent) */
export type GeneralContentAboutDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content der sich nicht wiederholt auf der gesamten Website. Es sollte immer nur einen Content published sein [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/generalContent) */
export type GeneralContentAboutImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Content der sich nicht wiederholt auf der gesamten Website. Es sollte immer nur einen Content published sein [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/generalContent) */
export type GeneralContentHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Content der sich nicht wiederholt auf der gesamten Website. Es sollte immer nur einen Content published sein [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/generalContent) */
export type GeneralContentImpressumArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content der sich nicht wiederholt auf der gesamten Website. Es sollte immer nur einen Content published sein [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/generalContent) */
export type GeneralContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Content der sich nicht wiederholt auf der gesamten Website. Es sollte immer nur einen Content published sein [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/generalContent) */
export type GeneralContentPrivacyPolicyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content der sich nicht wiederholt auf der gesamten Website. Es sollte immer nur einen Content published sein [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/generalContent) */
export type GeneralContentSupportLogosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Content der sich nicht wiederholt auf der gesamten Website. Es sollte immer nur einen Content published sein [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/generalContent) */
export type GeneralContentVersionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type GeneralContentCollection = {
  __typename?: 'GeneralContentCollection';
  items: Array<Maybe<GeneralContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GeneralContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneralContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneralContentFilter>>>;
  aboutDescription?: InputMaybe<Scalars['String']['input']>;
  aboutDescription_contains?: InputMaybe<Scalars['String']['input']>;
  aboutDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  aboutDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aboutDescription_not?: InputMaybe<Scalars['String']['input']>;
  aboutDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  aboutDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aboutImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  impressum?: InputMaybe<Scalars['String']['input']>;
  impressum_contains?: InputMaybe<Scalars['String']['input']>;
  impressum_exists?: InputMaybe<Scalars['Boolean']['input']>;
  impressum_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  impressum_not?: InputMaybe<Scalars['String']['input']>;
  impressum_not_contains?: InputMaybe<Scalars['String']['input']>;
  impressum_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  privacyPolicy?: InputMaybe<Scalars['String']['input']>;
  privacyPolicy_contains?: InputMaybe<Scalars['String']['input']>;
  privacyPolicy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  privacyPolicy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  privacyPolicy_not?: InputMaybe<Scalars['String']['input']>;
  privacyPolicy_not_contains?: InputMaybe<Scalars['String']['input']>;
  privacyPolicy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  supportLogosCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_exists?: InputMaybe<Scalars['Boolean']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GeneralContentLinkingCollections = {
  __typename?: 'GeneralContentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GeneralContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum GeneralContentOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Live Event Collection Type, wo ein Content entry pro Event erstellt wird [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/liveEvents) */
export type LiveEvents = Entry & _Node & {
  __typename?: 'LiveEvents';
  _id: Scalars['ID']['output'];
  constellation?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['DateTime']['output']>;
  eventType?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<LiveEventsLinkingCollections>;
  location?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  ticketLink?: Maybe<Scalars['String']['output']>;
  ticketNotiz?: Maybe<Scalars['String']['output']>;
};


/** Live Event Collection Type, wo ein Content entry pro Event erstellt wird [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/liveEvents) */
export type LiveEventsConstellationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Live Event Collection Type, wo ein Content entry pro Event erstellt wird [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/liveEvents) */
export type LiveEventsDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Live Event Collection Type, wo ein Content entry pro Event erstellt wird [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/liveEvents) */
export type LiveEventsEventTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Live Event Collection Type, wo ein Content entry pro Event erstellt wird [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/liveEvents) */
export type LiveEventsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Live Event Collection Type, wo ein Content entry pro Event erstellt wird [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/liveEvents) */
export type LiveEventsLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Live Event Collection Type, wo ein Content entry pro Event erstellt wird [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/liveEvents) */
export type LiveEventsTicketLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Live Event Collection Type, wo ein Content entry pro Event erstellt wird [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/liveEvents) */
export type LiveEventsTicketNotizArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LiveEventsCollection = {
  __typename?: 'LiveEventsCollection';
  items: Array<Maybe<LiveEvents>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LiveEventsFilter = {
  AND?: InputMaybe<Array<InputMaybe<LiveEventsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LiveEventsFilter>>>;
  constellation?: InputMaybe<Scalars['String']['input']>;
  constellation_contains?: InputMaybe<Scalars['String']['input']>;
  constellation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  constellation_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  constellation_not?: InputMaybe<Scalars['String']['input']>;
  constellation_not_contains?: InputMaybe<Scalars['String']['input']>;
  constellation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  eventType?: InputMaybe<Scalars['String']['input']>;
  eventType_contains?: InputMaybe<Scalars['String']['input']>;
  eventType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventType_not?: InputMaybe<Scalars['String']['input']>;
  eventType_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  location_contains?: InputMaybe<Scalars['String']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location_not?: InputMaybe<Scalars['String']['input']>;
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  ticketLink?: InputMaybe<Scalars['String']['input']>;
  ticketLink_contains?: InputMaybe<Scalars['String']['input']>;
  ticketLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ticketLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ticketLink_not?: InputMaybe<Scalars['String']['input']>;
  ticketLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  ticketLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ticketNotiz?: InputMaybe<Scalars['String']['input']>;
  ticketNotiz_contains?: InputMaybe<Scalars['String']['input']>;
  ticketNotiz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ticketNotiz_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ticketNotiz_not?: InputMaybe<Scalars['String']['input']>;
  ticketNotiz_not_contains?: InputMaybe<Scalars['String']['input']>;
  ticketNotiz_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LiveEventsLinkingCollections = {
  __typename?: 'LiveEventsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type LiveEventsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LiveEventsOrder {
  ConstellationAsc = 'constellation_ASC',
  ConstellationDesc = 'constellation_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  EventTypeAsc = 'eventType_ASC',
  EventTypeDesc = 'eventType_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TicketLinkAsc = 'ticketLink_ASC',
  TicketLinkDesc = 'ticketLink_DESC',
  TicketNotizAsc = 'ticketNotiz_ASC',
  TicketNotizDesc = 'ticketNotiz_DESC'
}

/** Music Collection type für Album, Singles etc. [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/music) */
export type Music = Entry & _Node & {
  __typename?: 'Music';
  _id: Scalars['ID']['output'];
  albumCollection?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  distributorUrLs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<MusicLinkingCollections>;
  musicCover?: Maybe<Asset>;
  musicTitle?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  url?: Maybe<Scalars['String']['output']>;
};


/** Music Collection type für Album, Singles etc. [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/music) */
export type MusicAlbumCollectionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Music Collection type für Album, Singles etc. [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/music) */
export type MusicDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Music Collection type für Album, Singles etc. [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/music) */
export type MusicDistributorUrLsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Music Collection type für Album, Singles etc. [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/music) */
export type MusicLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Music Collection type für Album, Singles etc. [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/music) */
export type MusicMusicCoverArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Music Collection type für Album, Singles etc. [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/music) */
export type MusicMusicTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Music Collection type für Album, Singles etc. [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/music) */
export type MusicReleaseDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Music Collection type für Album, Singles etc. [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/music) */
export type MusicUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MusicCollection = {
  __typename?: 'MusicCollection';
  items: Array<Maybe<Music>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MusicFilter = {
  AND?: InputMaybe<Array<InputMaybe<MusicFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MusicFilter>>>;
  albumCollection?: InputMaybe<Scalars['String']['input']>;
  albumCollection_contains?: InputMaybe<Scalars['String']['input']>;
  albumCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  albumCollection_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  albumCollection_not?: InputMaybe<Scalars['String']['input']>;
  albumCollection_not_contains?: InputMaybe<Scalars['String']['input']>;
  albumCollection_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  distributorUrLs_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  distributorUrLs_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  distributorUrLs_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  distributorUrLs_exists?: InputMaybe<Scalars['Boolean']['input']>;
  musicCover_exists?: InputMaybe<Scalars['Boolean']['input']>;
  musicTitle?: InputMaybe<Scalars['String']['input']>;
  musicTitle_contains?: InputMaybe<Scalars['String']['input']>;
  musicTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  musicTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  musicTitle_not?: InputMaybe<Scalars['String']['input']>;
  musicTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  musicTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  releaseDate?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  releaseDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  releaseDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MusicLinkingCollections = {
  __typename?: 'MusicLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MusicLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MusicOrder {
  AlbumCollectionAsc = 'albumCollection_ASC',
  AlbumCollectionDesc = 'albumCollection_DESC',
  MusicTitleAsc = 'musicTitle_ASC',
  MusicTitleDesc = 'musicTitle_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  generalContent?: Maybe<GeneralContent>;
  generalContentCollection?: Maybe<GeneralContentCollection>;
  liveEvents?: Maybe<LiveEvents>;
  liveEventsCollection?: Maybe<LiveEventsCollection>;
  music?: Maybe<Music>;
  musicCollection?: Maybe<MusicCollection>;
  video?: Maybe<Video>;
  videoCollection?: Maybe<VideoCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryGeneralContentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGeneralContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GeneralContentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GeneralContentFilter>;
};


export type QueryLiveEventsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLiveEventsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LiveEventsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LiveEventsFilter>;
};


export type QueryMusicArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMusicCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MusicOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MusicFilter>;
};


export type QueryVideoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVideoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VideoFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

/** Video Collection Type für Music Videos [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/video) */
export type Video = Entry & _Node & {
  __typename?: 'Video';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<VideoLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  videoLink?: Maybe<Scalars['String']['output']>;
};


/** Video Collection Type für Music Videos [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/video) */
export type VideoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Video Collection Type für Music Videos [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/video) */
export type VideoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video Collection Type für Music Videos [See type definition](https://app.contentful.com/spaces/pfus6eibra5d/content_types/video) */
export type VideoVideoLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type VideoCollection = {
  __typename?: 'VideoCollection';
  items: Array<Maybe<Video>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VideoFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoLink?: InputMaybe<Scalars['String']['input']>;
  videoLink_contains?: InputMaybe<Scalars['String']['input']>;
  videoLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoLink_not?: InputMaybe<Scalars['String']['input']>;
  videoLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoLinkingCollections = {
  __typename?: 'VideoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type VideoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum VideoOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VideoLinkAsc = 'videoLink_ASC',
  VideoLinkDesc = 'videoLink_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};
