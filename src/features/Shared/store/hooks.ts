import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../featuresStore';

export const useFeatureDispatch = () => useDispatch<AppDispatch>();
export const useFeatureSelect: TypedUseSelectorHook<RootState> = useSelector;
