import React from "react";
import { useAuthContext } from "../components/context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requireAdmin }) {
  //로그인한 사용자가 있는지 확인
  // 사용자가 어드민 권한이 있는지 확인
  //requireAdmin이 true인 경우 로그인도 되고, 어드민 권한도 있어야 함.
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
