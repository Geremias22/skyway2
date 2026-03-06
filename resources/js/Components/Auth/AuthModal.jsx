import { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { route } from "@/utils/route";
import { createPortal } from "react-dom";

export default function AuthModal({ open, mode, onClose, onModeChange }) {
  const loginForm = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const registerForm = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // ESC para cerrar
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Reset/limpieza al cerrar y al cambiar de modo
  useEffect(() => {
    if (!open) {
      loginForm.reset();
      loginForm.clearErrors();
      registerForm.reset();
      registerForm.clearErrors();
      return;
    }

    if (mode === "login") {
      registerForm.clearErrors();
      registerForm.reset("password", "password_confirmation");
    } else {
      loginForm.clearErrors();
      loginForm.reset("password");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, mode]);

  const isLogin = mode === "login";

  const submitLogin = (e) => {
    e.preventDefault();
    loginForm.post(route("login"), {
      preserveScroll: true,
      onSuccess: () => onClose(),
      onFinish: () => loginForm.reset("password"),
    });
  };

  const submitRegister = (e) => {
    e.preventDefault();
    registerForm.post(route("register"), {
      preserveScroll: true,
      onSuccess: () => onClose(),
      onFinish: () => registerForm.reset("password", "password_confirmation"),
    });
  };

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="sky-modal" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <button
        type="button"
        className="sky-modal-backdrop"
        onClick={onClose}
        aria-label="Cerrar"
      />

      {/* Panel (usa tu glass) */}
      <div className="sky-modal-panel sky-panel">
        <div className="p-6 sky-modal-body">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="sky-heading text-lg">
                {isLogin ? "Iniciar sesión" : "Crear cuenta"}
              </div>
              <div className="sky-muted text-sm">
                {isLogin
                  ? "Accede para guardar guías y preferencias."
                  : "Regístrate para guardar itinerarios y personalizar resultados."}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-2 py-1 text-foreground/70 hover:bg-white/10"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          <div className="sky-divider my-5" />

          {/* Tabs (reutiliza chips) */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onModeChange("login")}
              className={`sky-chip ${isLogin ? "is-active" : ""}`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => onModeChange("register")}
              className={`sky-chip ${!isLogin ? "is-active" : ""}`}
            >
              Registro
            </button>
          </div>

          {/* Body */}
          <div className="mt-5">
            {isLogin ? (
              <form onSubmit={submitLogin} className="space-y-4">
                <Field
                  label="Email"
                  type="email"
                  value={loginForm.data.email}
                  onChange={(v) => loginForm.setData("email", v)}
                  error={loginForm.errors.email}
                  autoComplete="email"
                />

                <Field
                  label="Contraseña"
                  type="password"
                  value={loginForm.data.password}
                  onChange={(v) => loginForm.setData("password", v)}
                  error={loginForm.errors.password}
                  autoComplete="current-password"
                />

                <label className="flex items-center gap-2 text-sm sky-muted">
                  <input
                    type="checkbox"
                    checked={!!loginForm.data.remember}
                    onChange={(e) =>
                      loginForm.setData("remember", e.target.checked)
                    }
                  />
                  Recuérdame
                </label>

                <button
                  type="submit"
                  disabled={loginForm.processing}
                  className="sky-btn w-full"
                >
                  Entrar
                </button>

                {loginForm.hasErrors && (
                  <p className="text-sm text-red-400">
                    Revisa los campos marcados.
                  </p>
                )}
              </form>
            ) : (
              <form onSubmit={submitRegister} className="space-y-4">
                <Field
                  label="Nombre"
                  type="text"
                  value={registerForm.data.name}
                  onChange={(v) => registerForm.setData("name", v)}
                  error={registerForm.errors.name}
                  autoComplete="name"
                />

                <Field
                  label="Email"
                  type="email"
                  value={registerForm.data.email}
                  onChange={(v) => registerForm.setData("email", v)}
                  error={registerForm.errors.email}
                  autoComplete="email"
                />

                <Field
                  label="Contraseña"
                  type="password"
                  value={registerForm.data.password}
                  onChange={(v) => registerForm.setData("password", v)}
                  error={registerForm.errors.password}
                  autoComplete="new-password"
                />

                <Field
                  label="Confirmar contraseña"
                  type="password"
                  value={registerForm.data.password_confirmation}
                  onChange={(v) =>
                    registerForm.setData("password_confirmation", v)
                  }
                  error={registerForm.errors.password_confirmation}
                  autoComplete="new-password"
                />

                <button
                  type="submit"
                  disabled={registerForm.processing}
                  className="sky-btn w-full"
                >
                  Crear cuenta
                </button>

                {registerForm.hasErrors && (
                  <p className="text-sm text-red-400">
                    Revisa los campos marcados.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 text-sm sky-muted">
            {isLogin ? (
              <button
                type="button"
                onClick={() => onModeChange("register")}
                className="hover:underline"
              >
                ¿No tienes cuenta? Regístrate
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onModeChange("login")}
                className="hover:underline"
              >
                ¿Ya tienes cuenta? Inicia sesión
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function Field({ label, type, value, onChange, error, autoComplete }) {
  return (
    <div className="space-y-1">
      <label className="text-sm sky-muted">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        className={`sky-input ${error ? "is-error" : ""}`}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}