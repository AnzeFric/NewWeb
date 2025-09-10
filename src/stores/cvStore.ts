import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {CVData} from "@/constants/interfaces/cv";

interface CvStore {
    cvList: Array<CVData>;
    setCvList: (cvList: Array<CVData>) => void;
    reset: () => Promise<void>;
}

const initialState = {
    cvList: []
};

const useCvStore = create(
  persist<CvStore>(
    (set) => ({
      ...initialState,
       setCvList: (cvList: Array<CVData>) => {
        set({ cvList: cvList });
      },
      reset: async () => {
        set(() => ({ ...initialState }));
        useCvStore.persist.clearStorage();
      },
    }),
    {
      name: "cvStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCvStore;