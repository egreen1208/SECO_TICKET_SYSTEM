# Custom Fields Builder

## Overview
The Custom Fields Builder allows administrators to define queue-specific custom fields that appear in ticket creation and edit forms. Each queue can have its own set of custom fields tailored to its specific needs.

## Features

### Supported Field Types
1. **Text** - Single-line text input
2. **Text Area** - Multi-line text input
3. **Number** - Numeric input
4. **Date** - Date picker
5. **Checkbox** - Yes/No toggle
6. **Dropdown** - Single selection from predefined options
7. **Radio Buttons** - Single selection displayed as radio buttons

### Field Properties
Each custom field can be configured with:
- **Field ID**: Unique identifier (lowercase, underscores only)
- **Label**: Display name shown to users
- **Type**: Field input type
- **Required**: Whether the field must be filled
- **Placeholder**: Help text or example
- **Options**: Available choices (for dropdown/radio types)

## How to Use

### Creating Custom Fields

1. **Navigate to Queue Manager**
   - Go to Admin → Manage Queues & Categories
   - Click on an existing queue or create a new one

2. **Add Custom Fields**
   - In the queue edit form, scroll to "Custom Fields" section
   - Click **+ Add Custom Field**

3. **Configure Field Properties**
   - **Field ID**: Enter a unique identifier (e.g., `asset_tag`)
     - Must be lowercase with underscores only
     - Cannot be changed once created
   - **Label**: User-friendly name (e.g., "Asset Tag")
   - **Field Type**: Select from available types
   - **Required**: Choose Yes or No
   - **Placeholder**: Enter help text (optional)

4. **For Dropdown/Radio Fields**
   - Click **+ Add Option** to add choices
   - Enter each option value
   - Remove unwanted options with the × button

5. **Save the Queue**
   - Click **Save Queue** to apply changes
   - Custom fields will immediately appear in ticket forms

### Using Custom Fields in Tickets

#### Creating a New Ticket
1. Click **+ New Ticket**
2. Select a queue with custom fields
3. Fill in standard ticket information
4. Custom fields appear after Category/Subcategory
5. Complete required custom fields (marked with *)
6. Submit the ticket

#### Editing an Existing Ticket
1. Open a ticket
2. Click **Edit**
3. Custom fields appear with their current values
4. Modify as needed
5. Save changes

#### Viewing Custom Field Values
- Custom field values display in the ticket detail view
- They appear under "Additional Information" section
- Only populated fields are shown
- Values are formatted based on field type:
  - Checkboxes show "Yes" or "No"
  - Dates are formatted as readable dates
  - Other types show the raw value

## Examples

### Example 1: IT Asset Tracking
For IT queues, add fields to track hardware:
```
Field ID: asset_tag
Label: Asset Tag
Type: Text
Required: No
Placeholder: e.g., IT-12345

Field ID: urgent
Label: Business Critical
Type: Checkbox
Required: No
```

### Example 2: Facilities Requests
For Buildings & Grounds, specify location details:
```
Field ID: building
Label: Building Name
Type: Dropdown
Required: Yes
Options: [Main Building, Warehouse, Office A, Office B]

Field ID: room_number
Label: Room Number
Type: Text
Required: No
Placeholder: e.g., 201
```

### Example 3: Move Requests
For Move queue, capture move details:
```
Field ID: move_from
Label: Move From Location
Type: Text
Required: Yes
Placeholder: Current location

Field ID: move_to
Label: Move To Location
Type: Text
Required: Yes
Placeholder: Destination location

Field ID: move_date
Label: Preferred Move Date
Type: Date
Required: No
```

## Technical Details

### Data Storage

#### Queue Configuration
Custom fields are stored in the queue configuration:
```javascript
{
  id: "it",
  name: "Information Technology",
  // ... other queue properties
  customFields: [
    {
      id: "asset_tag",
      label: "Asset Tag",
      type: "text",
      required: false,
      placeholder: "e.g., IT-12345"
    },
    {
      id: "building",
      label: "Building Name",
      type: "dropdown",
      required: true,
      options: ["Main Building", "Warehouse", "Office A"],
      placeholder: "Select building"
    }
  ]
}
```

#### Ticket Data
Custom field values are stored with each ticket:
```javascript
{
  id: 123,
  title: "Computer not turning on",
  queue: "it",
  // ... standard ticket properties
  customFieldValues: {
    asset_tag: "IT-12345",
    building: "Main Building"
  }
}
```

### Validation

#### Field ID Validation
- Must match pattern: `^[a-z0-9_]+$`
- Only lowercase letters, numbers, and underscores
- No spaces or special characters

#### Required Fields
- Required fields must be completed before ticket submission
- HTML5 validation enforced automatically
- Empty values will prevent form submission

### Field Rendering

Custom fields are dynamically rendered based on queue selection:
```javascript
// Triggered when queue changes
renderCustomFields(queueId, containerId, existingValues);

// Collects values on form submission
const customFieldValues = collectCustomFieldValues(containerId);
```

### Display Logic

- **In New Ticket Form**: Empty fields ready for input
- **In Edit Ticket Form**: Pre-populated with existing values
- **In Ticket Detail**: Read-only display of populated fields only

## Best Practices

### Naming Conventions
- **Field IDs**: Use descriptive snake_case (e.g., `preferred_date`, `contact_phone`)
- **Labels**: Use clear, user-friendly names (e.g., "Preferred Date", "Contact Phone")
- **Placeholders**: Provide examples to guide users (e.g., "e.g., (555) 123-4567")

### Field Organization
- Add fields in logical order (general to specific)
- Group related fields together
- Limit to essential fields only (avoid form fatigue)
- Use appropriate field types for data validation

### Required vs Optional
- Make fields required only when absolutely necessary
- Use placeholders for optional fields to show expected format
- Consider making most fields optional to reduce friction

### Dropdown/Radio Options
- Keep option lists concise (5-10 items ideal)
- Order options logically (alphabetical or by frequency)
- Use clear, distinct option names
- Add "Other" option if needed for flexibility

## Troubleshooting

### Custom Fields Not Appearing
**Problem**: Fields don't show in ticket form
**Solutions**:
- Verify queue has custom fields defined
- Check if you're creating a ticket for that specific queue
- Refresh the page to load latest queue configuration
- Verify field definitions were saved successfully

### Field ID Cannot Be Changed
**Problem**: Can't modify field ID after saving
**Design**: Field IDs are immutable to prevent data corruption
**Solution**: Create a new field with the correct ID and delete the old one

### Values Not Saving
**Problem**: Custom field values not stored with ticket
**Solutions**:
- Ensure fields are filled before submitting
- Check browser console for JavaScript errors
- Verify required fields are completed
- Clear browser cache and try again

### Values Not Displaying
**Problem**: Custom field values don't show in ticket detail
**Solutions**:
- Check if values were actually saved with the ticket
- Verify field still exists in queue configuration
- Ensure values are not empty strings
- Check browser console for errors

## Migration Notes

### Adding Fields to Existing Queues
- New custom fields can be added to queues at any time
- Existing tickets won't have values for new fields
- New fields will appear in edit form for old tickets
- No data migration required

### Removing Custom Fields
- Deleting a field from queue configuration hides it from forms
- Existing ticket data with that field is preserved
- Values won't display but remain in database
- Re-adding field with same ID restores visibility

### Changing Field Types
- Modifying field type may cause display issues
- Existing values remain as-is (no automatic conversion)
- Consider creating new field instead of changing type
- Test thoroughly after type changes

## Future Enhancements

Planned improvements:
- **Conditional Fields**: Show/hide fields based on other field values
- **Field Validation**: Custom regex patterns and validation rules
- **Default Values**: Pre-populate fields with common values
- **Field Groups**: Organize related fields into collapsible sections
- **Import/Export**: Share field configurations between queues
- **Field Dependencies**: Link fields to categories/subcategories
- **Calculated Fields**: Auto-compute values from other fields
- **File Upload Fields**: Attach files specific to custom fields

## API Functions

### Rendering Custom Fields
```javascript
renderCustomFields(queueId, containerId, existingValues)
// queueId: ID of the queue
// containerId: DOM element ID to render fields into
// existingValues: Object with existing field values (for edit mode)
```

### Collecting Field Values
```javascript
const values = collectCustomFieldValues(containerId);
// Returns object with field IDs as keys and user input as values
```

### Displaying Field Values
```javascript
displayCustomFields(ticket);
// Renders read-only custom field values in ticket detail modal
```

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify queue configuration in Queue Manager
3. Inspect browser console for error messages
4. Check existing tickets for field value examples
5. Review queue configuration data in localStorage

## Files Modified

- **app.js**: Custom field rendering, collection, and display functions
- **home.html**: Custom fields container in new ticket form and detail modal
- **queue-manager.html**: Custom fields editor UI and styling
- **queue-manager.js**: Custom field CRUD operations in Queue Manager
