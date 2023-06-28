function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var hamburgerMenu = document.querySelector('.hamburger-menu');
  var closeIcon = document.querySelector('.close-icon');
  var header = document.getElementById('header');

  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    hamburgerMenu.style.display = 'block';
    closeIcon.style.display = 'none';
    header.style.paddingTop = '40px';
  } else {
    menu.classList.add('open');
    hamburgerMenu.style.display = 'none';
    closeIcon.style.display = 'block';
    header.style.paddingTop = '80px';
  }
}

function scrollToSection(sectionId) {
  var section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
      featuredImage: 'https://img.freepik.com/free-photo/team-software-programmers-leaving-after-analyzing-source-code-wall-screen-tv-comparing-errors-using-digital-tablet-system-engineers-passing-screens-compiling-code-artificial-intelligence_482257-41848.jpg?size=626&ext=jpg&ga=GA1.1.117870262.1687918357&semt=ais',
      technologies: ['Ruby on Rails', ' CSS', ' JavaScript', ' HTML'],
      liveVersion: 'https://example.com/project1',
      sourceLink: 'https://github.com/example/project1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
      featuredImage: 'https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061972.jpg?size=626&ext=jpg&ga=GA1.1.117870262.1687918357&semt=ais',
      technologies: ['Ruby on Rails', ' CSS', ' JavaScript', ' HTML'],
      liveVersion: 'https://example.com/project1',
      sourceLink: 'https://github.com/example/project1',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
      featuredImage: 'https://img.freepik.com/free-photo/sofware-developer-thinking-while-touching-beard-while-typing-laptop-sitting-desk-with-multiple-screens-parsing-code-focused-database-admin-working-with-team-coding-background_482257-33556.jpg?size=626&ext=jpg&ga=GA1.1.117870262.1687918357&semt=ais',
      technologies: ['Ruby on Rails', ' CSS', ' JavaScript', ' HTML'],
      liveVersion: 'https://example.com/project1',
      sourceLink: 'https://github.com/example/project1',
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
      featuredImage: 'https://img.freepik.com/free-photo/programmer-man-wearing-headphones-typing-binary-code-website-security-working-remote-frrom-home-african-american-it-developer-writing-infographics-javascript-programming-firewall-server_482257-35575.jpg?size=626&ext=jpg&ga=GA1.1.117870262.1687918357&semt=ais',
      technologies: ['Ruby on Rails', ' CSS', ' JavaScript', ' HTML'],
      liveVersion: 'https://example.com/project1',
      sourceLink: 'https://github.com/example/project1',
    },
    {
      id: 5,
      name: 'Project 5',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
      featuredImage: 'https://img.freepik.com/free-photo/portrait-african-american-software-developer-holding-laptop-looking-up-smiling-camera-programer-typing-portable-computer-coworker-coding-cyber-security-agency_482257-41841.jpg?size=626&ext=jpg&ga=GA1.1.117870262.1687918357&semt=ais',
      technologies: ['Ruby on Rails', ' CSS', ' JavaScript', ' HTML'],
      liveVersion: 'https://example.com/project1',
      sourceLink: 'https://github.com/example/project1',
    },
    {
      id: 6,
      name: 'Project 6',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
      featuredImage: 'https://img.freepik.com/free-photo/selective-focus-african-american-it-employee-with-headset-working-remote-from-home-website-design-using-programming-technologies-computer-programmer-man-coding-digital-business-server_482257-30394.jpg?size=626&ext=jpg&ga=GA1.1.117870262.1687918357&semt=ais',
      technologies: ['Ruby on Rails', ' CSS', ' JavaScript', ' HTML'],
      liveVersion: 'https://example.com/project1',
      sourceLink: 'https://github.com/example/project1',
    },
  ];

  function generateProjectDetails(project) {
    const projectHTML = `
      <div class="image-container">
        <img class="featured-image" src="${project.featuredImage}" alt="Project Image">
      </div>
      <div class="name-container">
        <h2 class="project-name">${project.name}</h2>
        <div class="button-group">
          <button class="project-button" onclick="window.open('${project.liveVersion}', '_blank')">Live Version</button>
          <button class="project-button" onclick="window.open('${project.sourceLink}', '_blank')">Source Code</button>
        </div>
      </div>
      <h3>Technologies used:</h3>
      <ul class="grid-item">
        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
      </ul>
      <div class="project-description">${project.description}</div>
    `;
    return projectHTML;
  }

  function showProjectPopup(projectId) {
    const project = projects.find(p => p.id === projectId);
    const projectDetailsContainer = document.getElementById('project-details');
    projectDetailsContainer.innerHTML = generateProjectDetails(project);

    const popupContainer = document.querySelector('.popup-container');
    popupContainer.style.display = 'block';
  }

  function closePopup() {
    const popupContainer = document.querySelector('.popup-container');
    popupContainer.style.display = 'none';
  }

  const seeProjectButtons = document.querySelectorAll('.see-project-button');
  seeProjectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const projectId = parseInt(button.dataset.projectId);
      showProjectPopup(projectId);
    });
  });

  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', closePopup);
});