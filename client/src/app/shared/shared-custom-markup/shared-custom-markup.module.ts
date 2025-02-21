import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedActorImageModule } from '../shared-actor-image/shared-actor-image.module'
import { SharedGlobalIconModule } from '../shared-icons'
import { SharedMainModule } from '../shared-main'
import { SharedSearchModule } from '../shared-search'
import { SharedVideoMiniatureModule } from '../shared-video-miniature'
import { SharedVideoPlaylistModule } from '../shared-video-playlist'
import { CustomMarkupContainerComponent } from './custom-markup-container.component'
import { CustomMarkupHelpComponent } from './custom-markup-help.component'
import { CustomMarkupService } from './custom-markup.service'
import { DynamicElementService } from './dynamic-element.service'
import {
  ButtonMarkupComponent,
  ChannelMiniatureMarkupComponent,
  EmbedMarkupComponent,
  InstanceAvatarMarkupComponent,
  InstanceBannerMarkupComponent,
  PlaylistMiniatureMarkupComponent,
  VideoMiniatureMarkupComponent,
  VideosListMarkupComponent
} from './peertube-custom-tags'

@NgModule({
  imports: [
    CommonModule,

    SharedMainModule,
    SharedGlobalIconModule,
    SharedVideoMiniatureModule,
    SharedVideoPlaylistModule,
    SharedActorImageModule,
    SharedSearchModule
  ],

  declarations: [
    VideoMiniatureMarkupComponent,
    PlaylistMiniatureMarkupComponent,
    ChannelMiniatureMarkupComponent,
    EmbedMarkupComponent,
    VideosListMarkupComponent,
    ButtonMarkupComponent,
    CustomMarkupHelpComponent,
    CustomMarkupContainerComponent,
    InstanceBannerMarkupComponent,
    InstanceAvatarMarkupComponent
  ],

  exports: [
    VideoMiniatureMarkupComponent,
    PlaylistMiniatureMarkupComponent,
    ChannelMiniatureMarkupComponent,
    VideosListMarkupComponent,
    EmbedMarkupComponent,
    ButtonMarkupComponent,
    CustomMarkupHelpComponent,
    CustomMarkupContainerComponent,
    InstanceBannerMarkupComponent,
    InstanceAvatarMarkupComponent
  ],

  providers: [
    CustomMarkupService,
    DynamicElementService
  ]
})
export class SharedCustomMarkupModule { }
