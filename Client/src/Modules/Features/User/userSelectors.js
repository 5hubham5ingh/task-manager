import { useSelector } from "react-redux"

export function useUser() {return useSelector(state => state.user?.user)};

export function useToken() {return useSelector(state => state.user?.token)};