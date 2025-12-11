import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  categories = ['All', 'Kitchens', 'Bathrooms', 'Living Spaces'];
  activeCategory = signal('All');
  selectedProject = signal<Project | null>(null);

  projects: Project[] = [
    {
      id: 1,
      title: 'House Parkview',
      category: 'Kitchens',
      image: 'images/kitchens/_MG_7062.jpg',
      description: 'A contemporary kitchen design featuring clean lines and premium finishes.'
    },
    {
      id: 2,
      title: 'Sandhurst Residence',
      category: 'Bathrooms',
      image: 'images/bathrooms/_99A6874.jpg',
      description: 'Luxury bathroom with custom vanity and elegant fixtures.'
    },
    {
      id: 3,
      title: 'Morningside Home',
      category: 'Bathrooms',
      image: 'images/bathrooms/_MG_2358.jpg',
      description: 'Modern bathroom design with attention to detail and functionality.'
    },
    {
      id: 4,
      title: 'Houghton Estate',
      category: 'Bathrooms',
      image: 'images/bathrooms/_NP_1287.jpg',
      description: 'Sophisticated bathroom featuring custom cabinetry and premium materials.'
    },
    {
      id: 5,
      title: 'Melrose Project',
      category: 'Bathrooms',
      image: 'images/bathrooms/_NP_1453.jpg',
      description: 'Elegant bathroom design with seamless integration of storage solutions.'
    },
    {
      id: 6,
      title: 'Hyde Park Residence',
      category: 'Bathrooms',
      image: 'images/bathrooms/1.jpg',
      description: 'Contemporary bathroom with clean aesthetics and practical design.'
    },
    {
      id: 7,
      title: 'Atholl Home',
      category: 'Bathrooms',
      image: 'images/bathrooms/ANP_0986.jpg',
      description: 'Minimalist bathroom featuring custom-built vanities.'
    },
    {
      id: 8,
      title: 'Dunkeld Project',
      category: 'Bathrooms',
      image: 'images/bathrooms/ANP_1056.jpg',
      description: 'Luxurious bathroom with bespoke cabinetry and premium finishes.'
    },
    {
      id: 9,
      title: 'River Club Estate',
      category: 'Bathrooms',
      image: 'images/bathrooms/ANP_1273.jpg',
      description: 'Stunning bathroom design showcasing our craftsmanship.'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeCategory() === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeCategory());
  }

  setCategory(category: string) {
    this.activeCategory.set(category);
  }

  openProject(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }
}
