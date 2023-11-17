import create from 'zustand';
const useSubscribeStore = create((set, get) => ({
	newsPop: false,
	newsEmail: '',
	onChangeNewsEmail: (e) => set({ newsEmail: e.target.value }),
	onConfirmNews: () =>
		set({
			newsPop: false,
			newsEmail: '',
		}),
	onNewsSubClick: () => {
		set({
			newsPop: true,
		});
		window.scrollTo(0, 0);
	},

	orcaPop: false,
	orcaEmail: '',
	onChangeOrcaEmail: (e) => set({ orcaEmail: e.target.value }),
	onConfirmOrca: () =>
		set({
			orcaPop: false,
			orcaEmail: '',
		}),
	onOrcaSubClick: () => {
		set({
			orcaPop: true,
		});
		window.scrollTo(0, 0);
	},
}));

export default useSubscribeStore;
