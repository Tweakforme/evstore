"use client"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"

type CategoryFilterProps = {
  model?: string
  category?: string
  setQueryParams: (name: string, value: string) => void
  "data-testid"?: string
}

const teslaModels = [
  { value: "model-3", label: "Model 3" },
  { value: "model-y", label: "Model Y" }
]

const teslaCategories = [
  { value: "front-drive-unit", label: "Front Drive Unit" },
  { value: "rear-drive-unit", label: "Rear Drive Unit" },
  { value: "high-voltage-system", label: "High Voltage System" },
  { value: "body", label: "Body" },
  { value: "closure-components", label: "Closure Components" },
  { value: "seats", label: "Seats" },
  { value: "instrument-panel", label: "Instrument Panel" },
  { value: "interior-trim", label: "Interior Trim" },
  { value: "hv-battery-trim", label: "Hv Battery Trim" },
  { value: "electrical", label: "Electrical" },
  { value: "thermal-engagement", label: "Thermal Engagement" },
  { value: "safety-and-restraint", label: "Safety and Restraint" },
  { value: "infotainment", label: "Infotainment" },
  { value: "chassis", label: "Chassis" },
  { value: "steering", label: "Steering" },
  { value: "brake", label: "Brake" },
  { value: "wheels-and-tires", label: "Wheels and Tires" }
]

export function CategoryFilter({ 
  model, 
  category, 
  setQueryParams, 
  "data-testid": dataTestId 
}: CategoryFilterProps) {
  
  const handleModelChange = (value: string) => {
    setQueryParams("model", value)
    // Clear category when model changes
    if (category) {
      const params = new URLSearchParams(window.location.search)
      params.delete("category")
      const newUrl = `${window.location.pathname}?${params.toString()}`
      window.history.replaceState(null, "", newUrl)
    }
  }

  const handleCategoryChange = (value: string) => {
    setQueryParams("category", value)
  }

  return (
    <div className="space-y-6">
      {/* Model Filter */}
      <FilterRadioGroup
        title="Tesla Model"
        items={teslaModels}
        value={model || ""}
        handleChange={handleModelChange}
        data-testid={dataTestId}
      />

      {/* Category Filter - Only show if model is selected */}
      {model && (
        <FilterRadioGroup
          title="Part Category"
          items={teslaCategories.map(cat => ({
            value: cat.value,
            label: `${model === 'model-3' ? 'Model 3' : 'Model Y'} - ${cat.label}`
          }))}
          value={category || ""}
          handleChange={handleCategoryChange}
          data-testid={`${dataTestId}-category`}
        />
      )}
    </div>
  )
}