class DocstateChangesController < ApplicationController
  before_action :set_docstate_change, only: [:show, :edit, :update, :destroy]

  # GET /docstate_changes
  # GET /docstate_changes.json
  def index
    @docstate_changes = DocstateChange.all
  end

  # GET /docstate_changes/1
  # GET /docstate_changes/1.json
  def show
  end

  # GET /docstate_changes/new
  def new
    @docstate_change = DocstateChange.new
  end

  # GET /docstate_changes/1/edit
  def edit
  end

  
  # POST /docstate_changes
  # POST /docstate_changes.json
  def create
    @docstate_change = DocstateChange.new(docstate_change_params.merge({user_id: @current_user.id}))

    respond_to do |format|
      if @docstate_change.save
        # format.html { redirect_to @docstate_change, notice: 'Docstate change was successfully created.' }
        format.html { redirect_to docstate_changes_url, notice: 'Docstate change was successfully created.' }
        format.json { render :show, status: :created, location: @docstate_change }
      else
        format.html { render :new }
        format.json { render json: @docstate_change.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /docstate_changes/1
  # PATCH/PUT /docstate_changes/1.json
  def update
    respond_to do |format|
      if @docstate_change.update(docstate_change_params)
        # format.html { redirect_to @docstate_change, notice: 'Docstate change was successfully updated.' }
        format.html { redirect_to docstate_changes_url, notice: 'Docstate change was successfully updated.' }
        format.json { render :show, status: :ok, location: @docstate_change }
      else
        format.html { render :edit }
        format.json { render json: @docstate_change.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /docstate_changes/1
  # DELETE /docstate_changes/1.json
  def destroy
    @docstate_change.destroy
    respond_to do |format|
      format.html { redirect_to docstate_changes_url, notice: 'Docstate change was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_docstate_change
      @docstate_change = DocstateChange.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def docstate_change_params
      debugger
      params.require(:docstate_change).permit(:document_id, :from_state_id, :to_state_id, :user_id, :note)
    end
end
