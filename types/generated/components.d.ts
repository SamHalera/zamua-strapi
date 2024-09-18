import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentsBlock extends Schema.Component {
  collectionName: 'components_feature_text_blocks';
  info: {
    displayName: 'Block';
    description: '';
  };
  attributes: {
    color: Attribute.String;
    height: Attribute.String;
    width: Attribute.String;
    xPosition: Attribute.String;
    yPosition: Attribute.String;
    zIndex: Attribute.String;
  };
}

export interface ContentsContactHero extends Schema.Component {
  collectionName: 'components_contents_contact_heroes';
  info: {
    displayName: 'ContactHero';
  };
  attributes: {
    title: Attribute.String;
    bgImage: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    socialIcons: Attribute.Media;
  };
}

export interface ContentsCtaOptions extends Schema.Component {
  collectionName: 'components_contents_cta_options';
  info: {
    displayName: 'CTAOptions';
    description: '';
  };
  attributes: {
    positionYText: Attribute.Enumeration<['start', 'center', 'end']>;
    positionXText: Attribute.Enumeration<['start', 'center', 'end']>;
    bgImage: Attribute.String;
    height: Attribute.String;
  };
}

export interface ContentsCtaSection extends Schema.Component {
  collectionName: 'components_contents_cta_sections';
  info: {
    displayName: 'CTASection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    ctaOptions: Attribute.Component<'contents.cta-options'>;
    cta: Attribute.Component<'contents.cta'>;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ContentsCta extends Schema.Component {
  collectionName: 'components_contents_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
    position: Attribute.Enumeration<['start', 'center', 'end']>;
  };
}

export interface ContentsFeatureText extends Schema.Component {
  collectionName: 'components_contents_feature_texts';
  info: {
    displayName: 'FeatureText';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    positionXText: Attribute.String;
    positionYText: Attribute.String;
    block: Attribute.Component<'contents.block', true>;
    zIndexText: Attribute.String;
    text: Attribute.RichText;
    cta: Attribute.Component<'contents.cta'>;
    model: Attribute.String;
  };
}

export interface ContentsGalery extends Schema.Component {
  collectionName: 'components_contents_galeries';
  info: {
    displayName: 'Gallery';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    galleryStyle: Attribute.String;
    limlit: Attribute.Integer;
  };
}

export interface ContentsHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    iconScroll: Attribute.Boolean & Attribute.DefaultTo<true>;
    optionsHero: Attribute.Component<'contents.options-hero'>;
    image: Attribute.Media;
    isHomePage: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ContentsMediaFrames extends Schema.Component {
  collectionName: 'components_contents_media_frames';
  info: {
    displayName: 'MediaFrames';
  };
  attributes: {
    Media: Attribute.Component<'contents.media', true>;
    title: Attribute.String;
  };
}

export interface ContentsMedia extends Schema.Component {
  collectionName: 'components_contents_media';
  info: {
    displayName: 'Media';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    iframe: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ContentsMusicFeatureSingle extends Schema.Component {
  collectionName: 'components_contents_music_feature_singles';
  info: {
    displayName: 'MusicFeatureSingle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media;
    cta: Attribute.Component<'contents.cta'>;
    isHoverDisplay: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    url_feature: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ContentsMusicFeatures extends Schema.Component {
  collectionName: 'components_contents_music_features';
  info: {
    displayName: 'MusicFeatures';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    bgColor: Attribute.String;
    musicFeatureSingle: Attribute.Component<
      'contents.music-feature-single',
      true
    >;
  };
}

export interface ContentsOptionsHero extends Schema.Component {
  collectionName: 'components_hero_options_heroes';
  info: {
    displayName: 'optionsHero';
    description: '';
  };
  attributes: {
    bgImage: Attribute.String;
    positionYText: Attribute.Enumeration<['start', 'center', 'end']>;
    height: Attribute.String;
    positionXText: Attribute.Enumeration<['start', 'center', 'end']>;
  };
}

export interface ContentsPlaylistSection extends Schema.Component {
  collectionName: 'components_contents_playlist_sections';
  info: {
    displayName: 'PlaylistSection';
    description: '';
  };
  attributes: {
    playlists: Attribute.Relation<
      'contents.playlist-section',
      'oneToMany',
      'api::playlist.playlist'
    >;
    title: Attribute.String;
    url: Attribute.String;
    iframe: Attribute.String;
    imageCover: Attribute.Media;
    description: Attribute.RichText;
  };
}

export interface ContentsProjectSection extends Schema.Component {
  collectionName: 'components_contents_project_sections';
  info: {
    displayName: 'ProjectSection';
  };
  attributes: {
    projects: Attribute.Relation<
      'contents.project-section',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface ContentsSecondaryHero extends Schema.Component {
  collectionName: 'components_contents_secondary_heroes';
  info: {
    displayName: 'secondaryHero';
  };
  attributes: {
    title: Attribute.String;
    iconScroll: Attribute.Boolean & Attribute.DefaultTo<true>;
    optionsHero: Attribute.Component<'contents.options-hero'>;
  };
}

export interface ContentsShowSection extends Schema.Component {
  collectionName: 'components_contents_show_sections';
  info: {
    displayName: 'ShowSection';
    description: '';
  };
  attributes: {
    shows: Attribute.Relation<
      'contents.show-section',
      'oneToMany',
      'api::show.show'
    >;
  };
}

export interface ContentsText extends Schema.Component {
  collectionName: 'components_contents_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    bgColor: Attribute.String;
    cta: Attribute.Component<'contents.cta'>;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface FooterFooterSection extends Schema.Component {
  collectionName: 'components_footer_footer_sections';
  info: {
    displayName: 'footerSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Component<'footer.icon', true>;
    link: Attribute.Component<'footer.link', true>;
  };
}

export interface FooterIcon extends Schema.Component {
  collectionName: 'components_footer_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    url: Attribute.String;
    iconComponent: Attribute.String;
  };
}

export interface FooterLink extends Schema.Component {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String;
    path: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contents.block': ContentsBlock;
      'contents.contact-hero': ContentsContactHero;
      'contents.cta-options': ContentsCtaOptions;
      'contents.cta-section': ContentsCtaSection;
      'contents.cta': ContentsCta;
      'contents.feature-text': ContentsFeatureText;
      'contents.galery': ContentsGalery;
      'contents.hero': ContentsHero;
      'contents.media-frames': ContentsMediaFrames;
      'contents.media': ContentsMedia;
      'contents.music-feature-single': ContentsMusicFeatureSingle;
      'contents.music-features': ContentsMusicFeatures;
      'contents.options-hero': ContentsOptionsHero;
      'contents.playlist-section': ContentsPlaylistSection;
      'contents.project-section': ContentsProjectSection;
      'contents.secondary-hero': ContentsSecondaryHero;
      'contents.show-section': ContentsShowSection;
      'contents.text': ContentsText;
      'footer.footer-section': FooterFooterSection;
      'footer.icon': FooterIcon;
      'footer.link': FooterLink;
    }
  }
}
