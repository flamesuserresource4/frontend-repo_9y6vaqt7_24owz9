import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // Optionally log error to a service
    // console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-lg w-full bg-white rounded-xl shadow p-6 text-center">
            <h1 className="text-xl font-bold text-red-700">Something went wrong</h1>
            <p className="mt-2 text-sm text-gray-600">The page failed to render. Try refreshing. If this keeps happening, use the Test page in the menu.</p>
            {process.env.NODE_ENV !== 'production' && (
              <pre className="mt-4 p-3 rounded bg-gray-100 text-left text-xs overflow-auto">{String(this.state.error)}</pre>
            )}
            <a href="/" className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold">Go home</a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
