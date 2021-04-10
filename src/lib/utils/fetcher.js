import { VanillaStore } from '../store/spinner';

const url = 'https://60716a2a50aaea0017284a1a.mockapi.io/todos';

const { getState } = VanillaStore;

const showSpinner = ()=> {
  getState().show();
};

const hideSpinner = () => {
  getState().hide();
};

const call = async (req) => {
  try {
    showSpinner();
    const response = await req;
    return await response.json();
  } catch (error) {
    console.log(error);
  } finally {
    hideSpinner();
  }
}

const API = {
  async getAll() {
    const request = fetch(url);
    return await call(request);
  },

  async create(data) {
    const request = fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    return await call(request);
  },

  async update(data) {
    const request = fetch(`${url}/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await call(request);
  },

  async remove(id) {
    const request = fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    return await call(request);
  }
}

export default API;
