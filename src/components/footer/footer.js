import React from 'react';
import './footer.css'

function footer() {
    return (
        <div>
            <div>
      <div className="py-2 text-center footer-style">© Kumar Reddy &nbsp; {new Date().getFullYear()}</div>
    </div>
        </div>
    )
}

export default footer
