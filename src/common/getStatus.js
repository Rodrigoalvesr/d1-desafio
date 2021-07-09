export const createStatus = (name, icon, color) => {
  return { name, icon, color };
};

const getStatus = (id) => {
  switch (id) {
    case 0:
      return createStatus('Todos', 'table', '#D190DD');
    case 1:
      return createStatus('Em execução', 'sent', '#C1CA4F');
    case 2:
      return createStatus('Ativa', 'activated', '#35C667');
    case 3:
      return createStatus('Configurando', 'configuration', '#3FA8F4');
    case 4:
      return createStatus('Ociosa', 'idle', '#EBBD3E');
    case 5:
      return createStatus('Concluida', 'completed', '#9FABD5');
    default:
      console.error('[ERROR]: Icon not found.');
  }
};

export default getStatus;
