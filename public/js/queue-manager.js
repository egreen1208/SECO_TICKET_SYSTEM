// Queue Manager JavaScript
let currentEditingQueue = null;
let categoryCounter = 0;
let customFieldCounter = 0;

// DOM elements
const queueGrid = document.getElementById("queueGrid");
const queueModal = document.getElementById("queueModal");
const modalTitle = document.getElementById("modalTitle");
const addQueueBtn = document.getElementById("addQueueBtn");
const cancelQueueBtn = document.getElementById("cancelQueueBtn");
const saveQueueBtn = document.getElementById("saveQueueBtn");
const addCategoryBtn = document.getElementById("addCategoryBtn");
const addCustomFieldBtn = document.getElementById("addCustomFieldBtn");
const categoriesContainer = document.getElementById("categoriesContainer");
const customFieldsContainer = document.getElementById("customFieldsContainer");

// Form inputs
const queueIdInput = document.getElementById("queueId");
const queueNameInput = document.getElementById("queueName");
const queueDescriptionInput = document.getElementById("queueDescription");
const queueIconInput = document.getElementById("queueIcon");
const queueColorInput = document.getElementById("queueColor");
const queueColorTextInput = document.getElementById("queueColorText");
const queueParentInput = document.getElementById("queueParent");
const queueOrderInput = document.getElementById("queueOrder");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderQueues();
    setupEventListeners();
});

function setupEventListeners() {
    addQueueBtn.addEventListener("click", openAddQueueModal);
    cancelQueueBtn.addEventListener("click", closeModal);
    saveQueueBtn.addEventListener("click", saveQueue);
    addCategoryBtn.addEventListener("click", addCategoryGroup);
    addCustomFieldBtn.addEventListener("click", () => addCustomField());
    
    // Sync color inputs
    queueColorInput.addEventListener("input", (e) => {
        queueColorTextInput.value = e.target.value;
    });
    queueColorTextInput.addEventListener("input", (e) => {
        if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
            queueColorInput.value = e.target.value;
        }
    });
    
    // Close modal on background click
    queueModal.addEventListener("click", (e) => {
        if (e.target === queueModal) {
            closeModal();
        }
    });
}

// Get queue configuration from localStorage
function getQueueConfig() {
    const stored = localStorage.getItem("queueConfiguration");
    return stored ? JSON.parse(stored) : [];
}

function saveQueueConfig(config) {
    localStorage.setItem("queueConfiguration", JSON.stringify(config));
}

// Render all queues
function renderQueues() {
    const queues = getQueueConfig();
    
    // Separate main queues and sub-queues
    const mainQueues = queues.filter(q => !q.parentQueue).sort((a, b) => a.order - b.order);
    const subQueues = queues.filter(q => q.parentQueue);
    
    queueGrid.innerHTML = "";
    
    mainQueues.forEach(queue => {
        renderQueueCard(queue);
        
        // Render child queues
        const children = subQueues.filter(sq => sq.parentQueue === queue.id).sort((a, b) => a.order - b.order);
        children.forEach(child => renderQueueCard(child));
    });
}

function renderQueueCard(queue) {
    const card = document.createElement("div");
    card.className = `queue-card ${queue.active ? '' : 'inactive'}`;
    card.style.borderLeftColor = queue.color;
    
    const categoryCount = Object.keys(queue.categories || {}).length;
    const subcategoryCount = Object.values(queue.categories || {}).reduce((sum, subs) => sum + subs.length, 0);
    
    card.innerHTML = `
        <div class="queue-card-header">
            <div style="display: flex; align-items: center; flex: 1;">
                <span class="queue-icon">${queue.icon || '📋'}</span>
                <div class="queue-title">
                    <h3 class="queue-name">
                        ${queue.name}
                        ${queue.parentQueue ? `<span class="parent-queue-badge">SUB</span>` : ''}
                    </h3>
                    <div class="queue-id">${queue.id}</div>
                </div>
            </div>
            <div class="queue-actions">
                <button class="btn-edit" onclick="editQueue('${queue.id}')">Edit</button>
                <button class="btn-toggle" onclick="toggleQueue('${queue.id}')">${queue.active ? 'Disable' : 'Enable'}</button>
                <button class="btn-delete" onclick="deleteQueue('${queue.id}')">Delete</button>
            </div>
        </div>
        
        <p class="queue-description">${queue.description || 'No description'}</p>
        
        <div class="queue-meta">
            <span>Order: ${queue.order}</span>
            <span>Categories: ${categoryCount}</span>
            <span>Subcategories: ${subcategoryCount}</span>
            ${queue.parentQueue ? `<span>Parent: ${queue.parentQueue}</span>` : ''}
        </div>
        
        <div class="queue-categories">
            <h4>Categories:</h4>
            <div class="category-list">
                ${Object.keys(queue.categories || {}).slice(0, 5).map(cat => 
                    `<span class="category-badge">${cat}</span>`
                ).join('')}
                ${categoryCount > 5 ? `<span class="category-badge">+${categoryCount - 5} more</span>` : ''}
            </div>
        </div>
    `;
    
    queueGrid.appendChild(card);
}

function openAddQueueModal() {
    currentEditingQueue = null;
    modalTitle.textContent = "Add New Queue";
    
    // Clear form
    queueIdInput.value = "";
    queueIdInput.disabled = false;
    queueNameInput.value = "";
    queueDescriptionInput.value = "";
    queueIconInput.value = "";
    queueColorInput.value = "#007bff";
    queueColorTextInput.value = "#007bff";
    queueParentInput.value = "";
    queueOrderInput.value = "1";
    
    // Populate parent queue dropdown
    populateParentDropdown();
    
    // Clear categories
    categoriesContainer.innerHTML = "";
    categoryCounter = 0;
    
    // Clear custom fields
    customFieldsContainer.innerHTML = "";
    customFieldCounter = 0;
    
    // Add one default category
    addCategoryGroup();
    
    queueModal.classList.add("active");
}

function editQueue(queueId) {
    const queues = getQueueConfig();
    const queue = queues.find(q => q.id === queueId);
    
    if (!queue) return;
    
    currentEditingQueue = queueId;
    modalTitle.textContent = `Edit Queue: ${queue.name}`;
    
    // Fill form
    queueIdInput.value = queue.id;
    queueIdInput.disabled = true; // Cannot change ID
    queueNameInput.value = queue.name;
    queueDescriptionInput.value = queue.description || "";
    queueIconInput.value = queue.icon || "";
    queueColorInput.value = queue.color || "#007bff";
    queueColorTextInput.value = queue.color || "#007bff";
    queueParentInput.value = queue.parentQueue || "";
    queueOrderInput.value = queue.order || 1;
    
    // Populate parent queue dropdown
    populateParentDropdown(queue.id);
    
    // Load categories
    categoriesContainer.innerHTML = "";
    categoryCounter = 0;
    
    if (queue.categories && Object.keys(queue.categories).length > 0) {
        Object.entries(queue.categories).forEach(([category, subcategories]) => {
            addCategoryGroup(category, subcategories);
        });
    } else {
        addCategoryGroup();
    }
    
    // Load custom fields
    customFieldsContainer.innerHTML = "";
    customFieldCounter = 0;
    
    if (queue.customFields && queue.customFields.length > 0) {
        queue.customFields.forEach(field => {
            addCustomField(field);
        });
    }
    
    queueModal.classList.add("active");
}

function populateParentDropdown(excludeId = null) {
    const queues = getQueueConfig();
    const mainQueues = queues.filter(q => !q.parentQueue && q.id !== excludeId);
    
    queueParentInput.innerHTML = '<option value="">None (Main Queue)</option>';
    mainQueues.forEach(q => {
        const option = document.createElement("option");
        option.value = q.id;
        option.textContent = q.name;
        queueParentInput.appendChild(option);
    });
}

function addCategoryGroup(categoryName = "", subcategories = []) {
    const groupId = `category-${categoryCounter++}`;
    
    const group = document.createElement("div");
    group.className = "category-group";
    group.id = groupId;
    
    group.innerHTML = `
        <div class="category-header">
            <input type="text" placeholder="Category Name (e.g., Hardware)" value="${categoryName}" class="category-name">
            <button class="btn-remove" onclick="removeCategoryGroup('${groupId}')">Remove</button>
        </div>
        <div class="subcategory-list" id="${groupId}-subs">
            ${subcategories.length > 0 ? 
                subcategories.map(sub => `
                    <div class="subcategory-item">
                        <input type="text" placeholder="Subcategory" value="${sub}" class="subcategory-name">
                        <button class="btn-remove" onclick="this.parentElement.remove()">×</button>
                    </div>
                `).join('') : 
                `<div class="subcategory-item">
                    <input type="text" placeholder="Subcategory" class="subcategory-name">
                    <button class="btn-remove" onclick="this.parentElement.remove()">×</button>
                </div>`
            }
        </div>
        <button class="btn-add" onclick="addSubcategory('${groupId}-subs')">+ Add Subcategory</button>
    `;
    
    categoriesContainer.appendChild(group);
}

function removeCategoryGroup(groupId) {
    document.getElementById(groupId)?.remove();
}

function addSubcategory(containerId) {
    const container = document.getElementById(containerId);
    const item = document.createElement("div");
    item.className = "subcategory-item";
    item.innerHTML = `
        <input type="text" placeholder="Subcategory" class="subcategory-name">
        <button class="btn-remove" onclick="this.parentElement.remove()">×</button>
    `;
    container.appendChild(item);
}

// -------------------------------
// CUSTOM FIELDS MANAGEMENT
// -------------------------------
function addCustomField(fieldData = null) {
    const fieldId = `customfield-${customFieldCounter++}`;
    
    const fieldItem = document.createElement("div");
    fieldItem.className = "custom-field-item";
    fieldItem.id = fieldId;
    
    const fieldType = fieldData?.type || "text";
    const hasOptions = fieldType === "dropdown" || fieldType === "radio";
    
    fieldItem.innerHTML = `
        <div class="custom-field-header">
            <strong>Custom Field</strong>
            <button class="btn-remove" onclick="removeCustomField('${fieldId}')">Remove</button>
        </div>
        <div class="custom-field-grid">
            <div class="form-group">
                <label>Field ID *</label>
                <input type="text" class="cf-id" placeholder="e.g., asset_tag" value="${fieldData?.id || ''}" ${fieldData ? 'disabled' : ''}>
                <small style="color: #666; font-size: 11px;">Lowercase, underscores only</small>
            </div>
            <div class="form-group">
                <label>Label *</label>
                <input type="text" class="cf-label" placeholder="e.g., Asset Tag" value="${fieldData?.label || ''}">
            </div>
            <div class="form-group">
                <label>Field Type</label>
                <select class="cf-type">
                    <option value="text" ${fieldType === 'text' ? 'selected' : ''}>Text</option>
                    <option value="textarea" ${fieldType === 'textarea' ? 'selected' : ''}>Text Area</option>
                    <option value="number" ${fieldType === 'number' ? 'selected' : ''}>Number</option>
                    <option value="date" ${fieldType === 'date' ? 'selected' : ''}>Date</option>
                    <option value="checkbox" ${fieldType === 'checkbox' ? 'selected' : ''}>Checkbox</option>
                    <option value="dropdown" ${fieldType === 'dropdown' ? 'selected' : ''}>Dropdown</option>
                    <option value="radio" ${fieldType === 'radio' ? 'selected' : ''}>Radio Buttons</option>
                </select>
            </div>
            <div class="form-group">
                <label>Required</label>
                <select class="cf-required">
                    <option value="false" ${!fieldData?.required ? 'selected' : ''}>No</option>
                    <option value="true" ${fieldData?.required ? 'selected' : ''}>Yes</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>Placeholder/Help Text</label>
            <input type="text" class="cf-placeholder" placeholder="e.g., Enter asset tag number" value="${fieldData?.placeholder || ''}">
        </div>
        <div class="custom-field-options" id="${fieldId}-options" style="display: ${hasOptions ? 'block' : 'none'}">
            <label><strong>Options (one per line)</strong></label>
            <div id="${fieldId}-options-list">
                ${hasOptions && fieldData?.options ? 
                    fieldData.options.map(opt => `
                        <div class="option-item">
                            <input type="text" class="cf-option" value="${opt}">
                            <button class="btn-remove" onclick="this.parentElement.remove()">×</button>
                        </div>
                    `).join('') :
                    `<div class="option-item">
                        <input type="text" class="cf-option" placeholder="Option 1">
                        <button class="btn-remove" onclick="this.parentElement.remove()">×</button>
                    </div>`
                }
            </div>
            <button class="btn-add" onclick="addCustomFieldOption('${fieldId}-options-list')">+ Add Option</button>
        </div>
    `;
    
    customFieldsContainer.appendChild(fieldItem);
    
    // Add event listener to show/hide options based on field type
    const typeSelect = fieldItem.querySelector(".cf-type");
    const optionsDiv = fieldItem.querySelector(`#${fieldId}-options`);
    
    typeSelect.addEventListener("change", (e) => {
        const showOptions = e.target.value === "dropdown" || e.target.value === "radio";
        optionsDiv.style.display = showOptions ? "block" : "none";
    });
}

function removeCustomField(fieldId) {
    document.getElementById(fieldId)?.remove();
}

function addCustomFieldOption(containerId) {
    const container = document.getElementById(containerId);
    const item = document.createElement("div");
    item.className = "option-item";
    item.innerHTML = `
        <input type="text" class="cf-option" placeholder="Option">
        <button class="btn-remove" onclick="this.parentElement.remove()">×</button>
    `;
    container.appendChild(item);
}

function saveQueue() {
    // Validate required fields
    const id = queueIdInput.value.trim();
    const name = queueNameInput.value.trim();
    
    if (!id || !name) {
        alert("Queue ID and Name are required.");
        return;
    }
    
    // Validate ID format
    if (!/^[a-z0-9-]+$/.test(id)) {
        alert("Queue ID must be lowercase letters, numbers, and hyphens only.");
        return;
    }
    
    // Collect categories
    const categories = {};
    const categoryGroups = categoriesContainer.querySelectorAll(".category-group");
    
    categoryGroups.forEach(group => {
        const catName = group.querySelector(".category-name").value.trim();
        if (!catName) return;
        
        const subcategoryInputs = group.querySelectorAll(".subcategory-name");
        const subcategories = Array.from(subcategoryInputs)
            .map(input => input.value.trim())
            .filter(val => val !== "");
        
        if (subcategories.length > 0) {
            categories[catName] = subcategories;
        }
    });
    
    // Collect custom fields
    const customFields = [];
    const customFieldItems = customFieldsContainer.querySelectorAll(".custom-field-item");
    
    customFieldItems.forEach(item => {
        const fieldId = item.querySelector(".cf-id").value.trim();
        const fieldLabel = item.querySelector(".cf-label").value.trim();
        const fieldType = item.querySelector(".cf-type").value;
        const fieldRequired = item.querySelector(".cf-required").value === "true";
        const fieldPlaceholder = item.querySelector(".cf-placeholder").value.trim();
        
        if (!fieldId || !fieldLabel) return; // Skip if missing required data
        
        // Validate field ID format
        if (!/^[a-z0-9_]+$/.test(fieldId)) {
            alert(`Custom field ID "${fieldId}" must be lowercase letters, numbers, and underscores only.`);
            return;
        }
        
        const field = {
            id: fieldId,
            label: fieldLabel,
            type: fieldType,
            required: fieldRequired,
            placeholder: fieldPlaceholder
        };
        
        // Collect options if dropdown or radio
        if (fieldType === "dropdown" || fieldType === "radio") {
            const optionInputs = item.querySelectorAll(".cf-option");
            const options = Array.from(optionInputs)
                .map(input => input.value.trim())
                .filter(val => val !== "");
            
            if (options.length > 0) {
                field.options = options;
            }
        }
        
        customFields.push(field);
    });
    
    // Build queue object
    const queueData = {
        id: id,
        name: name,
        description: queueDescriptionInput.value.trim(),
        color: queueColorInput.value,
        icon: queueIconInput.value.trim(),
        active: true,
        parentQueue: queueParentInput.value || null,
        order: parseInt(queueOrderInput.value) || 1,
        categories: categories,
        customFields: customFields
    };
    
    // Save to config
    let queues = getQueueConfig();
    
    if (currentEditingQueue) {
        // Update existing
        const index = queues.findIndex(q => q.id === currentEditingQueue);
        if (index >= 0) {
            queues[index] = { ...queues[index], ...queueData };
        }
    } else {
        // Check for duplicate ID
        if (queues.find(q => q.id === id)) {
            alert(`Queue with ID "${id}" already exists.`);
            return;
        }
        
        // Add new
        queues.push(queueData);
    }
    
    saveQueueConfig(queues);
    closeModal();
    renderQueues();
    
    alert(`Queue "${name}" saved successfully!`);
}

function toggleQueue(queueId) {
    let queues = getQueueConfig();
    const queue = queues.find(q => q.id === queueId);
    
    if (!queue) return;
    
    queue.active = !queue.active;
    saveQueueConfig(queues);
    renderQueues();
}

function deleteQueue(queueId) {
    const queues = getQueueConfig();
    const queue = queues.find(q => q.id === queueId);
    
    if (!queue) return;
    
    // Check if queue has children
    const hasChildren = queues.some(q => q.parentQueue === queueId);
    if (hasChildren) {
        alert("Cannot delete a queue that has sub-queues. Delete the sub-queues first.");
        return;
    }
    
    // Check if queue has tickets (would need to check tickets data)
    const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    const hasTickets = tickets.some(t => t.queue === queueId);
    
    if (hasTickets) {
        if (!confirm(`Queue "${queue.name}" has ${tickets.filter(t => t.queue === queueId).length} ticket(s). Deleting this queue will make those tickets inaccessible. Continue?`)) {
            return;
        }
    } else {
        if (!confirm(`Delete queue "${queue.name}"? This action cannot be undone.`)) {
            return;
        }
    }
    
    const filtered = queues.filter(q => q.id !== queueId);
    saveQueueConfig(filtered);
    renderQueues();
}

function closeModal() {
    queueModal.classList.remove("active");
    currentEditingQueue = null;
}
