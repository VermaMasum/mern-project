import React from 'react';
import './MoleTrapInstructions.css';

const MoleTrapInstructions = () => {
  return (
    <div className="mole-trap-instructions">
      <h2>How to Use Grass Hawk Mole Trap - Complete Guide</h2>
      
      <div className="instructions-grid">
        <div className="instruction-step">
          <div className="step-number">1</div>
          <h3>Identify Active Mole Tunnels</h3>
          <p>Look for raised ridges in your lawn or garden soil. These are mole tunnels just beneath the surface. To confirm activity:</p>
          <ul>
            <li>Press down a small section of raised soil with your foot or hand</li>
            <li>Mark the spot with a small flag or stick</li>
            <li>Wait 24-48 hours and check if the soil has been pushed back up</li>
            <li>If disturbed, this is an active tunnel - perfect for trap placement</li>
          </ul>
          <div className="pro-tip">
            <strong>Pro Tip:</strong> Moles are most active during early morning and evening hours. Check tunnels during these times for best results.
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">2</div>
          <h3>Prepare the Trap Location</h3>
          <p>Once you've identified an active tunnel:</p>
          <ul>
            <li>Use a small trowel or garden spade to carefully dig a small opening</li>
            <li>Make the opening just large enough to fit the trap (about 4-6 inches wide)</li>
            <li>Clear away loose soil but don't collapse the tunnel structure</li>
            <li>Check that the tunnel runs in a straight line through your opening</li>
          </ul>
          <div className="warning">
            <strong>Important:</strong> Always wear gloves to prevent transferring human scent to the trap.
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">3</div>
          <h3>Set the Grass Hawk Trap</h3>
          <p>Proper trap setup is crucial for success:</p>
          <ul>
            <li>Hold the trap by the sides, avoiding the trigger mechanism</li>
            <li>Carefully insert the trap into the tunnel opening</li>
            <li>Ensure the trap sits level with the tunnel floor</li>
            <li>Press down the trigger mechanism until it clicks into place</li>
            <li>Double-check that the trigger is sensitive but secure</li>
          </ul>
          <div className="setup-details">
            <h4>Setup Checklist:</h4>
            <ul>
              <li>✓ Trap is centered in the tunnel</li>
              <li>✓ Trigger mechanism is properly engaged</li>
              <li>✓ No obstructions around the trap</li>
              <li>✓ Tunnel opening is partially covered with soil</li>
            </ul>
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">4</div>
          <h3>Monitor and Maintain</h3>
          <p>Regular monitoring ensures effectiveness:</p>
          <ul>
            <li>Check the trap every 12-24 hours</li>
            <li>Look for signs of mole activity around the trap area</li>
            <li>If no activity after 3-4 days, relocate to a new active tunnel</li>
            <li>After successful capture, reset the trap in the same location if activity continues</li>
          </ul>
          <div className="maintenance-schedule">
            <h4>Maintenance Schedule:</h4>
            <ul>
              <li><strong>Daily:</strong> Check trap status</li>
              <li><strong>Weekly:</strong> Clean trap with mild soap and water</li>
              <li><strong>Monthly:</strong> Inspect for wear and damage</li>
              <li><strong>Seasonally:</strong> Store properly when not in use</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="additional-tips">
        <h3>Advanced Tips for Maximum Success</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>🌤️ Best Weather Conditions</h4>
            <p>Set traps during mild weather when moles are most active. Avoid extreme heat or cold.</p>
          </div>
          <div className="tip-card">
            <h4>📍 Multiple Trap Strategy</h4>
            <p>Set 2-3 traps in different active tunnels to increase success rate.</p>
          </div>
          <div className="tip-card">
            <h4>🧤 Scent Control</h4>
            <p>Rub soil from the tunnel on your gloves and the trap to mask human scent.</p>
          </div>
          <div className="tip-card">
            <h4>🕐 Timing Matters</h4>
            <p>Set traps in the evening for best results, as moles are nocturnal.</p>
          </div>
        </div>
      </div>

      <div className="troubleshooting">
        <h3>Common Issues & Solutions</h3>
        <div className="issue-list">
          <div className="issue">
            <h4>Trap Not Triggering</h4>
            <p><strong>Cause:</strong> Trigger too sensitive or tunnel collapsed</p>
            <p><strong>Solution:</strong> Adjust trigger sensitivity and ensure tunnel integrity</p>
          </div>
          <div className="issue">
            <h4>Mole Avoiding Trap</h4>
            <p><strong>Cause:</strong> Human scent or trap placement</p>
            <p><strong>Solution:</strong> Use gloves and relocate to new active tunnel</p>
          </div>
          <div className="issue">
            <h4>Multiple Moles Present</h4>
            <p><strong>Cause:</strong> Large infestation</p>
            <p><strong>Solution:</strong> Use multiple traps and consider professional help</p>
          </div>
        </div>
      </div>

      <div className="safety-reminders">
        <h3>Important Safety Reminders</h3>
        <ul>
          <li>Always wear gloves when handling the trap</li>
          <li>Keep children and pets away from trap areas</li>
          <li>Check local wildlife regulations before use</li>
          <li>Never place traps near play areas or pet zones</li>
          <li>Store trap safely when not in use</li>
        </ul>
      </div>
    </div>
  );
};

export default MoleTrapInstructions;
