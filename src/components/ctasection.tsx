import React from 'react'
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

function Ctasection() {
  return (
      <div className="section-padding">
        <div className="max-w-3xl mx-auto text-center glass-panel p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
          Start Your <span className="text-gradient-crimson">Transformation</span>
          </h2>
          <p className="font-body text-muted-foreground mb-8">
          Join GB Fitness Studio in Avadi and start your own fitness transformation with expert trainers, structured workout programs, and a motivating community.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors">
            Begin Your Transformation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
        )
}

export default Ctasection