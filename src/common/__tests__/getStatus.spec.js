import getStatus, { createStatus } from '../getStatus';

global.console = { error: jest.fn() };

describe('Get status', () => {
  it('Should return an object with icon name and color', () => {
    const status = createStatus('Concluida', 'completed', '#9FABD5');
    const mock = {
      name: 'Concluida',
      icon: 'completed',
      color: '#9FABD5',
    };
    expect(status).toEqual(mock);
  });

  it('Should return an object with name Todos icon table and color #D190DD', () => {
    const status = getStatus(0);
    expect(status).toEqual({
      name: 'Todos',
      icon: 'table',
      color: '#D190DD',
    });
  });

  it('Should return an object with name Em execução icon sent and color #C1CA4F', () => {
    const status = getStatus(1);
    expect(status).toEqual({
      name: 'Em execução',
      icon: 'sent',
      color: '#C1CA4F',
    });
  });

  it('Should return an object with name Ativa icon activated and color #35C667', () => {
    const status = getStatus(2);
    expect(status).toEqual({
      name: 'Ativa',
      icon: 'activated',
      color: '#35C667',
    });
  });

  it('Should return an object with name Configurando icon configuration and color #3FA8F4', () => {
    const status = getStatus(3);
    expect(status).toEqual({
      name: 'Configurando',
      icon: 'configuration',
      color: '#3FA8F4',
    });
  });

  it('Should return an object with name Ociosa icon idle and color #EBBD3E', () => {
    const status = getStatus(4);
    expect(status).toEqual({
      name: 'Ociosa',
      icon: 'idle',
      color: '#EBBD3E',
    });
  });

  it('Should return an object with name Concluida icon completed and color #9FABD5', () => {
    const status = getStatus(5);
    expect(status).toEqual({
      name: 'Concluida',
      icon: 'completed',
      color: '#9FABD5',
    });
  });

  it('Should return an error in console log', () => {
    jest.spyOn(global.console, 'error');
    getStatus(6);
    expect(console.error).toBeCalled();
  });
});
