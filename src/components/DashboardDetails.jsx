import styled from 'styled-components'

const DashboardDetails = styled.main`
  min-height: calc(100vh - 72px);
  background: linear-gradient(180deg, #f7faf7 0%, #ecf3ec 100%);
  color: #203022;
  padding: clamp(0.7rem, 1.5vw, 1.2rem);

  .dashboard-header,
  .location-status,
  .results-section,
  .install-hint,
  .pwa-feedback,
  hr,
  .copyright {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }

  .dashboard-header {
    margin-bottom: 1rem;
  }

  .install-hint {
    background: #ffffff;
    border: 1px solid #d8e4d7;
    padding: 0.9rem 1rem;
    border-radius: 14px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .hint-actions {
    display: flex;
    gap: 0.6rem;

    button {
      border-radius: 999px;
      padding: 0.55rem 1rem;
      cursor: pointer;
      background: #1f5a33;
      color: #fff;
    }

    .secondary {
      background: #eaf2ea;
      color: #28452c;
    }
  }

  .pwa-feedback {
    color: #476149;
    font-size: 0.88rem;
    margin-bottom: 0.7rem;
  }

  .dashboard-header h1 {
    font-size: clamp(1.4rem, 3vw, 2.1rem);
    margin-bottom: 0.35rem;
  }

  .dashboard-header p { color: #49624d; }

  .location-status {
    margin-bottom: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    border: 1px solid #d8e2d8;
    background: #fff;
    font-size: 0.94rem;
  }

  .location-status.loading { border-color: #c6d7ea; background: #f1f8ff; }
  .location-status.success { border-color: #b8dec2; background: #effbf2; }
  .location-status.denied,
  .location-status.error { border-color: #f1ceb5; background: #fff7f2; }

  .results-section { margin-top: 1.2rem; }

  .results-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
    gap: 1rem;
  }

  .garapa-list { display: grid; gap: 0.9rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
  .garapa-list-item { background:#fff; border-radius:14px; padding:1rem; border:1px solid #dde8dd; box-shadow:0 6px 16px rgba(46,63,46,0.08); }

  .empty-state { background:#fff; border:1px dashed #c8d7c8; color:#5b6f5e; border-radius:12px; padding:1rem; }

  .copyright { text-align:center; color:#56705a; margin:1.2rem auto 0.2rem; font-size:0.88rem; }
  .copyright a { color: #3d5f42; text-decoration: none; }

  hr { margin:1.6rem auto 0; border-top:1px solid #dce7dc; }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(10, 20, 13, 0.58);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    animation: fadeIn 0.2s ease;
  }

  .modal-card {
    width: min(700px, 100%);
    max-height: 90vh;
    overflow-y: auto;
    background: #fff;
    border-radius: 18px;
    padding: 1.2rem;
    position: relative;
  }

  .close-modal { position:absolute; top:0.6rem; right:0.8rem; background:transparent; font-size:1.8rem; cursor:pointer; }

  .signup-form { display:grid; gap:0.8rem; margin-top:1rem; }
  .signup-form label { display:grid; gap:0.35rem; font-size:0.9rem; }
  .signup-form input, .signup-form textarea { border:1px solid #cfdccf; border-radius:10px; padding:0.65rem 0.7rem; }
  .signup-form input.invalid { border-color: #c95656; }
  .signup-form small, .form-error-block { color:#bb4545; font-size:0.78rem; }
  .signup-form button { background:#1f5a33; color:#fff; border-radius:999px; padding:0.8rem 1rem; cursor:pointer; }
  .status-message.success { color:#2b6a3c; }
  .status-message.error { color:#bb4545; }

  @media (max-width: 1024px) {
    .install-hint { flex-direction: column; align-items: flex-start; }
  }

  @media (max-width: 768px) {
    .results-title-row { flex-direction: column; align-items: flex-start; }
    .hint-actions { width: 100%; }
    .hint-actions button { flex: 1; }
  }

  @media (max-width: 313px) {
    .location-status,
    .install-hint,
    .modal-card { padding: 0.75rem; }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export default DashboardDetails
