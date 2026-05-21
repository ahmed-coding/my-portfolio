import { useEffect } from 'react';

export function SEOHead() {
  useEffect(() => {
    // Add structured data (JSON-LD) for rich snippets
    const schemaData = {
      '@context': 'https://schema.org/',
      '@type': 'Person',
      'name': 'Ahmed Hamzah',
      'url': 'https://ahmed-coding.vercel.app',
      'image': 'https://ahmed-coding.vercel.app/og-image.png',
      'description': 'Senior Backend Developer specializing in Python, Django, and AI/ML integration',
      'jobTitle': 'Senior Backend Developer',
      'alumniOf': {
        '@type': 'EducationalOrganization',
        'name': 'Your University'
      },
      'sameAs': [
        'https://linkedin.com/in/ahmed-hamzah',
        'https://github.com/ahmed-coding',
        'https://twitter.com/ahmed-coding'
      ],
      'knowsAbout': [
        'Python',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'Redis',
        'Celery',
        'JWT Authentication',
        'RBAC',
        'RESTful APIs',
        'AI/ML Integration'
      ],
      'worksFor': {
        '@type': 'Organization',
        'name': 'Freelance'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Professional Contact',
        'email': 'your-email@example.com'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Add Organization schema
    const organizationSchema = {
      '@context': 'https://schema.org/',
      '@type': 'Organization',
      'name': 'Ahmed Hamzah Portfolio',
      'url': 'https://ahmed-coding.vercel.app',
      'logo': 'https://ahmed-coding.vercel.app/favicon.svg',
      'description': 'Senior Backend Developer Portfolio',
      'sameAs': [
        'https://linkedin.com/in/ahmed-hamzah',
        'https://github.com/ahmed-coding'
      ]
    };

    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(orgScript);
    };
  }, []);

  return null;
}

export default SEOHead;
