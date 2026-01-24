// core/moduleDetector.js

// Import all modules
import * as defaultModule from "../modules/default.js";
import * as consumerDisputes from "../modules/consumer_disputes.js";
import * as buddy from "../modules/buddy.js";
import * as adoptionFostering from "../modules/adoption_fostering.js";
import * as benefitsNavigation from "../modules/benefits_navigation.js";
import * as budgeting from "../modules/budgeting.js";
import * as careHomes from "../modules/care_homes.js";
import * as clarity from "../modules/clarity.js";
import * as everydayAdmin from "../modules/everyday_admin.js";
import * as insuranceClaims from "../modules/insurance_claims.js";
import * as mortgages from "../modules/mortgages.js";
import * as movingHouse from "../modules/moving_house.js";
import * as pensions from "../modules/pensions.js";
import * as probateFunerals from "../modules/probate_funerals.js";
import * as savingsIsa from "../modules/savings_isa.js";
import * as schoolSupport from "../modules/school_support.js";
import * as taxReturns from "../modules/tax_returns.js";
import * as workplaceSupport from "../modules/workplace_support.js";

// Register all modules in this array
// NOTE: The order matters - modules are checked in this order
// Default should be LAST as it's the fallback
const ALL_MODULES = [
  consumerDisputes,
  buddy,
  adoptionFostering,
  benefitsNavigation,
  budgeting,
  careHomes,
  clarity,
  everydayAdmin,
  insuranceClaims,
  mortgages,
  movingHouse,
  pensions,
  probateFunerals,
  savingsIsa,
  schoolSupport,
  taxReturns,
  workplaceSupport,
  defaultModule  // ALWAYS LAST - this is the fallback
];

/**
 * Detects which module should handle the user input
 * @param {string} userInput - The user's message
 * @param {string[]} allowedModules - Array of module names the user has access to
 * @returns {Object} - The module definition object
 */
export function detectModule(userInput, allowedModules) {
  const text = userInput.toLowerCase().trim();
  
  // Filter to only modules the user has purchased/access to
  const availableModules = ALL_MODULES.filter((m) =>
    allowedModules.includes(m.moduleName)
  );
  
  console.log("🔍 Available modules for user:", availableModules.map(m => m.moduleName));
  console.log("🔍 User input:", text);
  
  // Try to match user input against module patterns
  // Skip default module in this loop - it has no patterns
  for (const mod of availableModules) {
    if (mod.moduleName === "default") continue; // Skip default, handle separately
    
    if (mod.patterns && mod.patterns.length > 0) {
      const matches = mod.patterns.some((pattern) =>
        text.includes(pattern.toLowerCase())
      );
      
      if (matches) {
        console.log("✅ Pattern match found:", mod.moduleName);
        return mod;
      }
    }
  }
  
  console.log("📌 No pattern match - checking for default module");
  
  // No pattern match - use default module if user has access to it
  const defaultMod = availableModules.find(m => m.moduleName === "default");
  if (defaultMod) {
    console.log("✅ Using default module");
    return defaultMod;
  }
  
  // User doesn't have default module - use the first available module as fallback
  if (availableModules.length > 0) {
    console.log("⚠️ No default module, using first available:", availableModules[0].moduleName);
    return availableModules[0];
  }
  
  // Ultimate fallback: return the hardcoded default from ALL_MODULES
  // This should never happen if capabilities are configured correctly
  console.log("❌ CRITICAL: No modules available, using hardcoded default");
  return defaultModule;
}
