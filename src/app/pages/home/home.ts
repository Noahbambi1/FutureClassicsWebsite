import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  services = [
    {
      title: 'Interior Design',
      description: 'Turnkey residential renovations and new builds, from concept to completion.',
      icon: 'design'
    },
    {
      title: 'Kitchens and Built-in Cabinetry',
      description: 'Bespoke kitchen design and custom cabinetry solutions, crafted to your exact specifications.',
      icon: 'kitchen'
    }
  ];

  process = [
    {
      step: '01',
      title: 'Brief',
      description: 'We begin with a consultation to understand your vision, lifestyle and requirements.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our team creates customized designs with 3D presentations for your approval.'
    },
    {
      step: '03',
      title: 'Manufacture',
      description: 'Your project is crafted in our state-of-the-art factory in Johannesburg.'
    },
    {
      step: '04',
      title: 'Install',
      description: 'Our specialized team delivers and installs your finished project with care.'
    }
  ];

  featuredProjects = [
    { image: 'images/kitchens/_MG_7062.jpg', title: 'House Parkview', category: 'Kitchen' },
    { image: 'images/bathrooms/_99A6874.jpg', title: 'Sandhurst Residence', category: 'Bathroom' },
    { image: 'images/bathrooms/_MG_2358.jpg', title: 'Morningside Home', category: 'Bathroom' }
  ];
}
