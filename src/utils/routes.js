import Curriculum from '../pages/Curriculum';
import Projects from '../pages/Projects';

export default [
  {
    hashPath: '/',
    key: 'home',
    exact: true,
    component: Curriculum
  },
  {
    hashPath: '/proyectos',
    key: 'projects',
    exact: true,
    component: Projects
  }
];
