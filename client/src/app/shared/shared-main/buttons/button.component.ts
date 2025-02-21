import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, booleanAttribute } from '@angular/core'
import { GlobalIconName } from '@app/shared/shared-icons'

@Component({
  selector: 'my-button',
  styleUrls: [ './button.component.scss' ],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent implements OnInit, OnChanges {
  @Input() label = ''
  @Input() theme: 'orange' | 'grey' = 'grey'
  @Input() icon: GlobalIconName
  @Input() ptRouterLink: string[] | string
  @Input() title: string
  @Input({ transform: booleanAttribute }) loading = false
  @Input({ transform: booleanAttribute }) disabled = false
  @Input({ transform: booleanAttribute }) responsiveLabel = false

  classes: { [id: string]: boolean } = {}

  ngOnInit () {
    this.buildClasses()
  }

  ngOnChanges () {
    this.buildClasses()
  }

  private buildClasses () {
    this.classes = {
      'peertube-button': !this.ptRouterLink,
      'peertube-button-link': !!this.ptRouterLink,
      'orange-button': this.theme === 'orange',
      'grey-button': this.theme === 'grey',
      'disabled': this.disabled,
      'icon-only': !this.label,
      'has-icon': !!this.icon,
      'responsive-label': this.responsiveLabel
    }
  }
}
