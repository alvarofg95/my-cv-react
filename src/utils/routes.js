import Curriculum from '../pages/Curriculum';
import Projects from '../pages/Projects';

export default [
  {
    hashPath: '/',
    exact: true,
    component: Curriculum
  },
  {
    hashPath: '/proyectos',
    exact: true,
    component: Projects
  }
];
