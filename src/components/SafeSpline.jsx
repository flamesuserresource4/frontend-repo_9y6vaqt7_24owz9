import React from 'react'

// Localized error boundary to prevent 3D canvas crashes from taking down the whole app
export default class SafeSpline extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    // Silently swallow Spline render errors; they often happen when assets fail to load
    // console.warn('SafeSpline suppressed error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/5" aria-hidden="true" />
      )
    }
    return this.props.children
  }
}
