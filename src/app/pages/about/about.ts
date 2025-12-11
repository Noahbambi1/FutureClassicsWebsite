import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [RouterLink, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  values = [
    {
      title: 'Craftsmanship',
      description: 'Every piece is crafted with meticulous attention to detail in our state-of-the-art factory.'
    },
    {
      title: 'Innovation',
      description: 'We blend traditional techniques with modern technology to deliver exceptional results.'
    },
    {
      title: 'Integrity',
      description: 'Honest communication and transparent processes guide every project we undertake.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with you, architects, and builders to bring your vision to life.'
    }
  ];

  services = [
    {
      title: 'Interior Design Studio',
      subtitle: 'Turnkey Solutions',
      description: 'Our interior design studio specialises in complete residential renovations and new builds. From initial concept to final styling, we manage every aspect of your project.',
      features: [
        'Space planning & layout design',
        'Material & finish selection',
        'Project management',
        'Contractor coordination',
        'Furniture & décor sourcing'
      ]
    },
    {
      title: 'Custom Cabinetry',
      subtitle: 'Made to Order',
      description: 'Our manufacturing arm creates bespoke built-in cabinetry with an emphasis on kitchens. Every piece is designed and crafted specifically for your space.',
      features: [
        'Custom kitchen design',
        'Built-in wardrobes',
        'Bathroom vanities',
        'Home office solutions',
        'Entertainment units'
      ]
    }
  ];
}
