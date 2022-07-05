import ModalContainer from './ModalContainer';
import ModalContent from './ModalContent';

const ProjectModal = ({ project, toggleVisibility, show }) => (
    <ModalContainer display={show} hide={toggleVisibility}>
      <article className="modal-article">
        <ModalContent modalInfo={project} />
      </article>
    </ModalContainer>
  );
  
  export default ProjectModal;